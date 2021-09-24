import React, { useState, useRef } from "react";
import { Keyboard, View, Image, Button, Text, TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const phone = useRef();
  const [input, setInput] = useState("");
  const [country, setCountry] = useState("ke");

  return (
    <View style={tw`flex flex-1 items-center justify-center bg-white`}>
      <View style={tw`items-center m-0`}>
        <Image
          style={[tw`w-52 h-24`]}
          source={require("../assets/splash.png")}
        />
        <Text style={tw`text-4xl text-black text-center font-bold`}>Login</Text>
        {/* <Text style={tw`text-xl text-gray-600`}>
          Please fill in the details below
        </Text> */}
      </View>

      <View style={tw`flex-row`}>
        <TextInput
          style={tw`text-xl mt-10 mx-5 px-5 py-2 border-b-2 border-black flex-grow`}
          autoFocus={true}
          value={input}
          onChangeText={(input) => {
            setInput(input);
          }}
          autoCompleteType="name"
          placeholder="Enter name..."
          placeholderTextColor="gray"
        />
      </View>

      <View style={tw`flex-row`}>
        <PhoneInput
          ref={phone}
          initialCountry={"ke"}
          value={country}
          onChangeText={(country) => {
            setCountry(country);
          }}
          style={tw`ml-5`}
        />
        <TextInput
          style={tw`text-xl my-5 mr-5 px-5 py-2 border-b-2 border-black flex-grow`}
          maxLength={12}
          value={input}
          onChangeText={(input) => {
            setInput(input);
          }}
          keyboardType="numeric"
          autoCompleteType="tel"
          placeholder="Enter phone number..."
          placeholderTextColor="gray"
        />
      </View>

      <Button
        title="Submit"
        style={tw`bg-green-300 text-white text-xl font-bold`}
        onPress={() => {
          navigation.navigate("OTP");
        }}
        onSubmitEditing={Keyboard.dismiss}
      />
    </View>
  );
}
