import Geolocation from "react-native-geolocation-service";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import SetRoute from "./SetRoute";
import * as Location from "expo-location";
import { TouchableOpacity } from "react-native";

const NavigateModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
  }, []);
  return (
    <SafeAreaView>
      <View style={tw`h-full w-full bg-green-300 m-auto mt-5`}>
        {/* <Favorites /> */}
        <MapView
          style={tw`h-full`}
          initialRegion={position}
          showsUserLocation={true}
        />
        <View style={[tw`items-center`]}>
          <TouchableOpacity
            style={[
              tw`absolute bottom-5 mx-0 p-3 rounded-lg items-center w-5/6 bg-yellow-300`,
            ]}
            onPress={() => {
              setModalOpen(true);
            }}
          >
            <Text style={tw`text-white text-lg font-bold`}>Set Route</Text>
          </TouchableOpacity>
          {modalOpen && <SetRoute setOpenModal={setModalOpen} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateModal;
