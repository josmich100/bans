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

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const TaxiStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Taxi" component={Taxi} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="NavigateModal" component={NavigateModal} />
      <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
    </Stack.Navigator>
  );
};

const CarHireStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="CarHire" component={CarHire} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="HireCard" component={HireCard} />
    </Stack.Navigator>
  );
};

export { AuthStack, MainStack, TaxiStack, CarHireStack };
