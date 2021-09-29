import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

import { MainStack } from "../components/navigation/StackNavigator";

const MainScreen = () => {
  return (
    <View style={tw`h-full`}>
      <MainStack />
    </View>
  );
};

const TaxiScreen = () => {
  return (
    <View style={tw`h-full`}>
      <TaxiStack />
    </View>
  );
};

const CarHireScreen = () => {
  return (
    <View style={tw`h-full`}>
      <CarHireStack />
    </View>
  );
};

export { MainScreen, TaxiScreen, CarHireScreen };
