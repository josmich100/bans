import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import Favorites from "./Favorites";
import Map from "./Map";

const NavigateModal = () => {
  return (
    <SafeAreaView>
      <View style={tw`h-full w-full bg-green-300 m-auto mt-5`}>
        {/* <Favorites /> */}
        <Map />
        {/*<MapView
          style={tw`flex-1 h-1/2 bg-green-300`}
          initialRegion={{
            latitude: -0.7749015,
            longitude: 34.9418074,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {origin && destination && (
        <MapViewDirections
          lineDashPattern={[3]}
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="blue"
        />
      )}
       {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Current Location"
          decription={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          decription={destination.description}
          identifier="destination"
        />
      )} 
        </MapView>*/}
      </View>
    </SafeAreaView>
  );
};

export default NavigateModal;
