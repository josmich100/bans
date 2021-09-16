import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
//import auth from "@react-native-firebase/auth";

const LoginScreen = () => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState("");

  // // Handle the button press
  // async function signInWithPhoneNumber(phoneNumber) {
  //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //   setConfirm(confirmation);
  // }

  // async function confirmCode() {
  //   try {
  //     await confirm.confirm(code);
  //   } catch (error) {
  //     console.log("Invalid code.");
  //   }
  // }

  // if (!confirm) {
  //   return (
  //     <View>
  //       <Button
  //         title="Phone Number Sign In"
  //         onPress={() => signInWithPhoneNumber("+254705469866")}
  //       />
  //     </View>
  //   );
  // }

  return (
    <View>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
