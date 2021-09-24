import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Welcome from "../../screens/Welcome";
import Login from "../../screens/LoginScreen";
import Home from "../../screens/Home";
import Taxi from "../../screens/Taxi";
import CarHire from "../../screens/CarHire";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings";

import RideOptionsCard from "../RideOptionsCard";
import NavigateModal from "../NavigateModal";
import HireCard from "../HireCard";

// import { TaxiStack, CarHireStack } from "./StackNavigator";
// import Tabs from "./TabNavigator";

const screenOptionStyle = {
  // headerTitle: (props) => <LogoTitle {...props} />,
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerBackTitle: "Back",
};

const Drawer = createDrawerNavigator();

const AuthDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

const MainDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const TaxiDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Taxi" component={Taxi} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="NavigateModal" component={NavigateModal} />
      <Drawer.Screen name="RideOptionsCard" component={RideOptionsCard} />
    </Drawer.Navigator>
  );
};

const CarHireDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="CarHire" component={CarHire} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="HireCard" component={HireCard} />
    </Drawer.Navigator>
  );
};

export { AuthDrawer, MainDrawer, TaxiDrawer, CarHireDrawer };
