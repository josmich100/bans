import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import {
  selectDestination,
  selectOrigin,
  setTravelTime,
} from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { Icon } from "react-native-elements";
import Map from "./Map";

const data = [
  {
    id: "Economical",
    plate: "KDA 001",
    icon: "home",
    cost: 1,
    distance: "Keroka,Kenya",
  },
  {
    id: "Business",
    plate: "KDA 001",
    icon: "briefcase",
    cost: 1.25,
    distance: "Keumbu,Kenya",
  },
  {
    id: "Luxury",
    plate: "KDA 001",
    icon: "home",
    cost: 1.6,
    distance: "Keroka,Kenya",
  },
];

const RideOptionsCard = ({ navigation }) => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();

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
            <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
          )}
          renderItem={({ item: { id, plate, cost, distance, icon } }) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
              <Icon
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={icon}
                type="ionicon"
                color="white"
                size={18}
              />
              <View>
                <Text style={tw`font-bold text-lg`}>{plate}</Text>
                <Text style={tw`text-gray-500 text-sm`}>{id}</Text>
                <Text style={tw`text-gray-500`}>{cost}</Text>
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
