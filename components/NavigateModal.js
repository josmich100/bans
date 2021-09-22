import Geolocation from "react-native-geolocation-service";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import SetRoute from "./SetRoute";
import * as Location from "expo-location";
import { TouchableOpacity } from "react-native";

const NavigateModal = () => {
  const [position, setPosition] = useState({
    latitude: -0.7749015,
    longitude: 34.9418074,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  useEffect(() => {
    const { status } = Location.requestForegroundPermissionsAsync();
    if (status == "granted") {
      Geolocation.getCurrentPosition((pos) => {
        const crd = pos.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        });
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [NavigateModal]);
  return (
    <SafeAreaView>
      {/* <View
        style={tw`h-1/4 w-5/6 rounded-md bg-green-300 m-auto mt-5 items-center`}
      >
      </View> */}
      <View style={tw`h-full w-full m-auto mt-5`}>
        {/* <Favorites /> */}
        <SetRoute />
        <MapView
          style={tw`h-full mt-16`}
          initialRegion={position}
          showsUserLocation={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigateModal;
