import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../../screens/Welcome";
import Login from "../../screens/LoginScreen";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings";
import Taxi from "../../screens/Taxi";
import CarHire from "../../screens/CarHire";

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

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="Taxi"
        component={Taxi}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="CarHire"
        component={CarHire}
        options={{ headerTitle: false }}
      />
    </Stack.Navigator>
  );
};

const TaxiStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Taxi">
      <Stack.Screen
        name="Taxi"
        component={Taxi}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: false }}
      />
    </Stack.Navigator>
  );
};

const CarHireStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="CarHire"
    >
      <Stack.Screen
        name="CarHire"
        component={CarHire}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: false }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, TaxiStackNavigator, CarHireStackNavigator };
