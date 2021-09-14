import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const Taxi = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView>
      <Stack.Navigator>
        <Stack.Screen
          name="NavigateCard"
          component={NavigateCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RideOptionsCard"
          component={RideOptionsCard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Taxi;
