import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import Logo from "../assets/logo.jpg";
import NavOptions from "../components/NavOptions";
const Home = () => {
  return (
    <View style={tw`p-10 bg-white items-center justify-center`}>
      <SafeAreaView>
        <Image
          style={[
            tw`mb-10 w-20 h-20`,
            {
              resizeMode: "contain",
            },
          ]}
          source={Logo}
        />
        <NavOptions />
      </SafeAreaView>
    </View>
  );
};

export default Home;
