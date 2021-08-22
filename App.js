import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./screens/Home";
import MapScreen from "./screens/MapScreen";
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
     <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false,}}/>
        <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false,}}/>
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
