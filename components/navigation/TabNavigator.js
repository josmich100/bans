import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStack, TaxiStack, CarHireStack } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={MainStack} />
    </Tab.Navigator>
  );
};

const TaxiTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Taxi" component={TaxiStack} />
    </Tab.Navigator>
  );
};
const CarHireTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="CarHire" component={CarHireStack} />
    </Tab.Navigator>
  );
};

export { MainTabs, TaxiTabs, CarHireTabs };
