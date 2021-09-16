import React, { useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-vector-icons";
import { useDispatch } from "react-redux";

const SetRoute = ({ setOpenModal, navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Modal animationType="slide" transparent={true}>
        <View style={tw`flex-1 text-black`}>
          <View style={tw`mx-5`}>
            <GooglePlacesAutocomplete
              placeholder="Where from?"
              style={tw`pt-2 text-xl`}
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
              style={[tw`bg-white pt-2 text-xl`]}
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
          </View>
          {/* <Pressable
              style={tw`items-end`}
              onPress={() => {
                setOpenModal(false);
              }}
            ></Pressable> */}
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

export default SetRoute;
