import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../../screens/Welcome";
import LoginScreen from "../../screens/LoginScreen";
import HomeScreen from "../../screens/Home";
import ProfileScreen from "../../screens/Profile";
import SettingsScreen from "../../screens/Settings";
import TaxiScreen from "../../screens/Taxi";
import CarHireScreen from "../../screens/CarHire";
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
      <Stack.Screen name="Main" component={MainDrawer} />
      <Stack.Screen name="Details" component={ProfileScreen} />
      <Stack.Screen name="Setup" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const TaxiStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TaxiDrawer} />
      <Stack.Screen name="Details" component={ProfileScreen} />
      <Stack.Screen name="Setup" component={SettingsScreen} />
      <Stack.Screen name="NavigateModal" component={NavigateModal} />
      <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
    </Stack.Navigator>
  );
};

const CarHireStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={CarHireDrawer} />
      <Stack.Screen name="Details" component={ProfileScreen} />
      <Stack.Screen name="Setup" component={SettingsScreen} />
      <Stack.Screen name="HireCard" component={HireCard} />
    </Stack.Navigator>
  );
};

export { AuthStack, MainStack, TaxiStack, CarHireStack };
