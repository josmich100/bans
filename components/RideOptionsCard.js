import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import {
  selectDestination,
  selectOrigin,
  selectTravelTime,
} from "../slices/navSlice";
import { Icon } from "react-native-elements";
import Map from "./Map";

const data = [
  {
    id: "Economical",
    src: "../assets/logo.png",
    cost: 1,
  },
  {
    id: "Business",
    src: "../assets/logo.png",
    cost: 1.25,
  },
  {
    id: "Luxury",
    src: "../assets/logo.png",
    cost: 1.6,
  },
];

const RideOptionsCard = ({ navigation }) => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();
  const travelTime = useSelector(selectTravelTime);

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
            <Icon name="chevron-left" type="fontawesome" />
          </TouchableOpacity>
          <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200 `, { height: 0.5 }]} />
          )}
          renderItem={({ item: { id, src, cost } }) => (
            <TouchableOpacity
              style={tw`flex-row items-center p-5 justify-evenly`}
            >
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
                <Text style={tw`font-bold text-2xl`}>KES. {cost * 99}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
