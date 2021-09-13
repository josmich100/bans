import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Favorites from "./Favorites";

const HireCard = () => {
  return (
    <View style={tw`container m-auto mt-5`}>
      <SafeAreaView>
        <Favorites />
      </SafeAreaView>
    </View>
  );
};

export default HireCard;
