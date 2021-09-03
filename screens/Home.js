import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlice";
const Home = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="starting point"
          styles={{container:{flex:0,}, textInput:{fontSize:18},}}
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
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default Home;
 
const styles = StyleSheet.create({});