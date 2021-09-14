import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import Taxi from "./screens/Taxi";
import CarHire from "./screens/CarHire";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Taxi"
              component={Taxi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarHire"
              component={CarHire}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
