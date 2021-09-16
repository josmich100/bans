import React, { useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-vector-icons";
import { useDispatch } from "react-redux";

const SetRoute = () => {
  const dispatch = useDispatch();

  return (
    <View style={tw`z-50 absolute w-3/4 pt-3`}>
      <GooglePlacesAutocomplete
        placeholder="Pick up point"
        styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
      <GooglePlacesAutocomplete
        placeholder="Where to?"
        styles={tw`bg-gray-200`}
        onPress={(data, details = null) => {
          dispatch(
            setDestination({
              location: details.geometry.location,
              description: data.description,
            })
          );
          navigation.navigate("RideOptionsCard");
          //dispatch(setDestination(null));
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />

      <Pressable style={tw`bg-gray-200 rounded-full `}>
        <Text style={tw`text-white text-center font-bold`}>
          current Location
        </Text>
      </Pressable>
    </View>
  );
};

export default SetRoute;
