import React from "react";
import {
  SafeAreaView,
  Button,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Logo from "../assets/logo.jpg";
import NavOptions from "../components/NavOptions";
import Logo from "../assets/logo.png";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={tw`p-10 bg-white items-center justify-center`}>
        <View style={tw`p-10 items-center`}>
          <Image style={[tw`mb-10 w-20 h-20`]} source={Logo} />
          <TouchableOpacity
            title="Login"
            style={tw`h-6 w-16 rounded-full items-center bg-blue-400`}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={tw`text-white text-lg font-bold`}>Login</Text>
          </TouchableOpacity>
        </View>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default Home;
