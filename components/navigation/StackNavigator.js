import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../../screens/Welcome";
import Login from "../../screens/LoginScreen";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings";
import Taxi from "../../screens/Taxi";
import CarHire from "../../screens/CarHire";
import RideOptionsCard from "../RideOptionsCard";
import NavigateModal from "../NavigateModal";
import HireCard from "../HireCard";

import {
  AuthDrawer,
  CarHireDrawer,
  MainDrawer,
  TaxiDrawer,
} from "./DrawerNavigator";

// function LogoTitle() {
//   return (
//     <>
//       <Image
//         style={{ width: 50, height: 50 }}
//         source={require("../../assets/logo.png")}
//       />
//     </>
//   );
// }

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={AuthDrawer} />
      <Stack.Screen name="Login" component={AuthDrawer} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={MainDrawer} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const TaxiStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Taxi" component={TaxiDrawer} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="NavigateModal" component={NavigateModal} />
      <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
    </Stack.Navigator>
  );
};

const CarHireStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CarHire" component={CarHireDrawer} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="HireCard" component={HireCard} />
    </Stack.Navigator>
  );
};

export { AuthStack, MainStack, TaxiStack, CarHireStack };
