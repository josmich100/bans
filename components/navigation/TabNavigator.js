import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Taxi from "../../screens/Taxi";
import CarHire from "../../screens/CarHire";
import { MainStack, TaxiStack, CarHireStack } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={MainStack} />
      <Tab.Screen name="Taxi" component={Taxi} />
      <Tab.Screen name="CarHire" component={CarHire} />
    </Tab.Navigator>
  );
};

export default MainTabs;
