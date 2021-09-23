import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MainStackNavigator,
  TaxiStackNavigator,
  CarHireStackNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{ headerTitle: false }}
      />
      <Tab.Screen
        name="Taxi"
        component={TaxiStackNavigator}
        options={{ headerTitle: false }}
      />
      <Tab.Screen
        name="CarHire"
        component={CarHireStackNavigator}
        options={{ headerTitle: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
