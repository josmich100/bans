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

const data = [
  {
    id: "Economical",
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

const RideOptionsCard = ({ navigation }) => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();
  const travelTime = useSelector(selectTravelTime);
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView>
      <View style={tw`h-1/2 w-full bg-gray-300`}>
        <Map />
      </View>
      <View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("NavigateModal")}
            style={[tw`absolute top-3 left-3 p-3 z-50`]}
          >
            {console.log(travelTime)}
            <Icon name="chevron-left" type="fontawesome" />
          </TouchableOpacity>
          <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
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
              onPress={() => setSelected(id)}
            >
              {console.log(selected)}
              <Avatar
                rounded
                size="large"
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
                <Text style={tw`text-gray-500 text-lg`}>
                  {travelTime?.distance.text}
                </Text>
                <Text style={tw`text-gray-500 text-lg`}>
                  {travelTime?.duration.text}
                </Text>
              </View>
              <View>
                <Text style={tw`text-gray-500 font-bold text-lg`}>
                  Ksh{" "}
                  {Math.round((cost * travelTime?.duration.value * 1.9) / 100)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        {selected && (
          <TouchableOpacity>Choose {selected?.id} </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
