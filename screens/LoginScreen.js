import React, { useState } from "react";
import { Keyboard, View, Button, Text, TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");

  const [OTP, setOTP] = useState("");
  const generateOTP = (length) => {
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setOTP(OTP);
    return OTP;
  };

  return (
    <View style={tw`flex-1 bg-yellow-300 items-center justify-center`}>
      <Text style={tw`text-4xl text-white text-center font-bold`}>Login</Text>
      <Text style={tw`text-lg text-black`}>
        Enter your phone number to log in...
      </Text>

      <TextInput
        style={tw`text-3xl text-white m-10 px-5 py-2 border-2 border-white`}
        autoFocus={true}
        value={phone}
        maxLength={12}
        onChangeText={(phone) => {
          setPhone(phone);
        }}
        placeholder="07** *** ***"
        placeholderTextColor="white"
        keyboardType="numeric"
        autoCompleteType="tel"
      />
      <Button
        title="Submit"
        style={tw`mx-auto h-44 w-44 rounded-full items-center bg-green-300`}
        onPress={() => {
          generateOTP(4);
          navigation.navigate("OTP", {
            OTP: OTP,
            phone: phone,
          });
        }}
        onSubmitEditing={Keyboard.dismiss}
      />
    </View>
  );
}
