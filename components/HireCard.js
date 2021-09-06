import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const HireCard = () => {
  return (
    <View style={tw`container m-auto mt-5`}>
      <SafeAreaView>
        <View style={tw`block bg-black p-3 m-2`}>
          <Text style={tw`text-white text-xl font-bold`}>CarHire</Text>
        </View>
        <View style={tw`block bg-black p-3 m-2`}>
          <Text style={tw`text-white text-xl font-bold`}>CarHire</Text>
        </View>
        <View style={tw`block bg-black p-3 m-2`}>
          <Text style={tw`text-white text-xl font-bold`}>CarHire</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HireCard;
