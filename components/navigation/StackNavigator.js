import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../../screens/Profile";
import TaxiScreen from "../../screens/Taxi";
import CarHireScreen from "../../screens/CarHire";

import { MainDrawer } from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainDrawer} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Taxi" component={TaxiScreen} />
      <Stack.Screen name="CarHire" component={CarHireScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
