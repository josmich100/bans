import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
import LoginScreen from "./screens/LoginScreen";
import OTP from "./screens/OTP";
import Taxi from "./screens/Taxi";
import CarHire from "./screens/CarHire";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("@expo/snack-static/react-native-logo.png")}
      />
    </>
  );
}

function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Get Taxi" component={Taxi}>
        {() => (
          <Drawer.Navigator>
            <Drawer.Screen name="Get Taxi" component={Taxi} />
            <Drawer.Screen name="Hire Car" component={CarHire} />
          </Drawer.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Hire Car" component={CarHire}>
        {() => (
          <Drawer.Navigator>
            <Drawer.Screen name="Get Taxi" component={Taxi} />
            <Drawer.Screen name="Hire Car" component={CarHire} />
          </Drawer.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{
              headerTitle: (props) => <LogoTitle {...props} />,
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            {/* <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTP"
              component={OTP}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Home"
              component={HomeStack}
              options={{
                title: "Home",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Taxi"
              component={Taxi}
              options={{ title: "Taxi", headerShown: false }}
            />
            <Stack.Screen
              name="CarHire"
              component={CarHire}
              options={{ title: "Car Hire", headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
