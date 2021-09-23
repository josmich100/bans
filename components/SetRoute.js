import React, { useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import firebase from "../firebase";
import { useNavigation } from "@react-navigation/native";

const SetRoute = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userId = firebase.auth().currentUser.uid;

  return (
    <View style={tw`z-50 absolute w-full pt-3`}>
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
          firebase
            .database()
            .ref("Travels/" + userId + "/origin")
            .set({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            });
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
      {console.log(firebase.auth().currentUser.uid)}
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
          firebase
            .database()
            .ref("Travels/" + userId + "/destination")
            .set({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            });

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

      <TouchableOpacity style={tw`bg-gray-200 rounded-full `}>
        <Text style={tw`text-white text-center font-bold`}>
          current Location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetRoute;
