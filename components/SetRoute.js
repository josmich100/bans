import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const SetRoute = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={tw`bg-gray-200 ml-5 mr-10`}>
            <GooglePlacesAutocomplete
              placeholder="starting point"
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
              styles={{
                container: {
                  flex: 0,
                  backgroundColor: "white",
                  paddingTop: 20,
                },
                textInput: {
                  fontSize: 18,
                  borderRadius: 0,
                  backgroundColor: "#DDDDDF",
                },
              }}
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
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setOpenModal(false);
              }}
            >
              <Text style={"tw`text-white text-center font-bold`"}>
                Hide Modal
              </Text>
            </Pressable>
          </View>
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

const styles = StyleSheet.create({
  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 22,
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: "center",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  // buttonOpen: {
  //   backgroundColor: "#F194FF",
  // },
  // buttonClose: {
  //   backgroundColor: "#2196F3",
  // },
  // textStyle: {
  //   color: "white",
  //   fontWeight: "bold",
  //   textAlign: "center",
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
});

export default SetRoute;
