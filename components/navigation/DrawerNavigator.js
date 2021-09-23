import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { TaxiStackNavigator, CarHireStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerTitle: false }}
      />
      <Drawer.Screen
        name="Taxi"
        component={TaxiStackNavigator}
        options={{ headerTitle: false }}
      />
      <Drawer.Screen
        name="CarHire"
        component={CarHireStackNavigator}
        options={{ headerTitle: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
