import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { AuthStack } from "./components/navigation/StackNavigator";
import MainNavigator from "./components/navigation/DrawerNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <MainNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
