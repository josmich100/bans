import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HireCard from "../components/HireCard";

const CarHire = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={tw`h-full`}>
      <Stack.Navigator>
        <Stack.Screen
          name="HireCard"
          component={HireCard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default CarHire;
