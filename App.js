import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./screens/Home";
import Taxi from "./screens/Taxi";
import CarHire from "./screens/CarHire";
import MapScreen from "./screens/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  return splash ? (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Image style={tw`h-20 w-20`} source={require("./assets/favicon.png")} />
      <Text style={tw`text-black text-4xl font-bold`}>Ananab</Text>
    </View>
  ) : (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
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
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
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
