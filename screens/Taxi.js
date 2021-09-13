import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateModal from "../components/NavigateModal";
import RideOptionsCard from "../components/RideOptionsCard";

const Taxi = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={tw`h-full`}>
      <Stack.Navigator>
        <Stack.Screen
          name="NavigateModal"
          component={NavigateModal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RideOptionsCard"
          component={RideOptionsCard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Taxi;
