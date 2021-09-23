import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";
import tw from "tailwind-react-native-classnames";
import {
  selectDestination,
  selectOrigin,
  selectTravelTime,
} from "../slices/navSlice";
import { Avatar, Icon } from "react-native-elements";
import "intl";
import Map from "./Map";
import firebase from "../firebase";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "Economy",
    src: "https://www.pngmart.com/files/4/Car-Transparent-Background.png",
    cost: 1,
  },
  {
    id: "Business",
    src: "https://www.pngkit.com/png/detail/53-534199_cars-photo-without-background.png",
    cost: 1.25,
  },
  {
    id: "Luxury",
    src: "https://toppng.com/uploads/preview/sports-car-luxury-vehicle-clip-art-cars-royalty-free-11564133172rexxvogcy4.png",
    cost: 1.6,
  },
];

const RideOptionsCard = () => {
  const travelTime = useSelector(selectTravelTime);
  const [ride, setRide] = useState(null);
  const userId = firebase.auth().currentUser.uid;
  const [modalOpen, setModalOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={tw`h-1/3 w-full bg-gray-300`}>
        <Map />
      </View>
      {modalOpen === false && (
        <View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("NavigateModal")}
              style={[tw`absolute top-3 left-3 p-3 z-50`]}
            >
              {console.log(travelTime)}
              <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
            <View style={tw`items-center py-2`}>
              <Text style={tw`text-gray-500 text-lg`}>
                Distance: {Math.round(travelTime?.distance.value / 100) / 10} KM
              </Text>
              <Text style={tw`text-gray-500 text-lg`}>
                Time: {travelTime?.duration.text}
              </Text>
              <Text style={tw`text-center font-bold text-xl`}>
                Select a Ride
              </Text>
            </View>
          </View>
          <FlatList
            data={data}
            style={tw`bottom-12 mt-3`}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={[tw`bg-gray-200 `, { height: 0.5 }]} />
            )}
            renderItem={({ item: { id, src, cost } }) => (
              <TouchableOpacity
                style={tw`flex-row items-center p-5 justify-evenly`}
                onPress={() => setRide(id)}
              >
                {console.log(ride)}
                <Avatar
                  rounded
                  size="medium"
                  source={{
                    uri: src,
                  }}
                />
                {/* <Image
                style={tw`h-24 w-24 mr-4 rounded-full bg-gray-300 p-3`}
                source={require(src)}
              /> */}
                <View>
                  <Text style={tw`font-bold text-lg`}>{id}</Text>
                </View>
                <View>
                  <Text style={tw`text-gray-500 font-bold text-lg`}>
                    Ksh {Math.round((cost * travelTime?.duration.value) / 5)}.00
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
          {ride && (
            <TouchableOpacity
              style={tw`bg-black text-center py-4 px-4 rounded bottom-12 mx-6 items-center `}
              onPress={() => {
                firebase
                  .database()
                  .ref("Travels/" + userId + "/info")
                  .set({
                    ride,
                    status: "Active",
                  });
                setModalOpen(true);
              }}
            >
              <Text style={tw` text-white text-lg font-bold`}>
                Choose {ride}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {modalOpen === true && (
        <View style={tw`justify-center items-center py-6`}>
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiJxvgiwK96fXlz613K2ZPxzoPFO0nUQr7w&usqp=CAU",
            }}
          />
          <Text style={tw`text-green-500 text-3xl font-bold pt-6`}>
            success
          </Text>
          <Text style={tw`text-green-500 text-3xl font-bold`}>
            Your Ride is on the way!!!
          </Text>
          <View style={tw`flex-row`}>
            <TouchableOpacity
              style={tw`bg-green-600 text-center py-4 px-4 rounded mx-6 mt-4 items-center `}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={tw` text-white text-lg font-bold`}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-red-600 text-center py-4 px-4 rounded mx-6 mt-4 items-center `}
              onPress={() => {
                firebase
                  .database()
                  .ref("Travels/" + userId + "/info")
                  .set({
                    ride,
                    status: "Completed",
                  });
                setModalOpen(false);
                setRide(null);
              }}
            >
              <Text style={tw` text-white text-lg font-bold`}>Cancel Ride</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
