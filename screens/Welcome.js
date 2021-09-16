import * as React from "react";
import { Image, Button, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

import CarouselCard from "../components/CarouselCard";

const Welcome = () => {
  return (
    <View style={tw`flex-1 items-center justify-center p-5`}>
      <CarouselCard />
    </View>
  );
};

export default Welcome;
