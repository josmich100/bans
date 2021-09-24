import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainTabs, TaxiTabs, CarHireTabs } from "./TabNavigator";

const Drawer = createDrawerNavigator();

const Drawers = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={MainTabs} />
      <Drawer.Screen name="Taxi" component={TaxiTabs} />
      <Drawer.Screen name="CarHire" component={CarHireTabs} />
    </Drawer.Navigator>
  );
};

export default Drawers;
