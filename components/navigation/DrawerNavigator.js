import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../../screens/Home";
import Taxi from "../../screens/Taxi";
import CarHire from "../../screens/CarHire";
import Profile from "../../screens/Profile";

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Taxi" component={Taxi} />
      <Drawer.Screen name="CarHire" component={CarHire} />
    </Drawer.Navigator>
  );
};

export { MainDrawer };
