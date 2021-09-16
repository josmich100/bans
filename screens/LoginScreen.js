import React, { useState, useRef } from "react";
import { Keyboard, View, Image, Button, Text, TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";
import PhoneInput from "react-native-phone-input";

// firebase
//   .firestore()
//   .collection("users")
//   .where("phoneNumber", "==", this.state.phoneNumber)
//   .get()
//   .then((querySnapshot) => {
//     if (!querySnapshot.empty) {
//       // User found with this phone number.
//       throw new Error("already-exists");
//     }

//     // change status
//     this.setState({ status: "Sending confirmation code..." });

//     // send confirmation OTP
//     return firebase.auth().verifyPhoneNumber(this.state.phoneNumber);
//   })
//   .then((phoneAuthSnapshot) => {
//     // verification sent
//     this.setState({
//       status: "Confirmation code sent.",
//       verificationId: phoneAuthSnapshot.verificationId,
//       showCodeInput: true, // shows input field such as react-native-confirmation-code-field
//     });
//   })
//   .catch((error) => {
//     // there was an error
//     let newStatus;
//     if (error.message === "already-exists") {
//       newStatus = "Sorry, this phone number is already in use.";
//     } else {
//       // Other internal error
//       // see https://firebase.google.com/docs/reference/js/firebase.firestore.html#firestore-error-code
//       // see https://firebase.google.com/docs/reference/js/firebase.auth.PhoneAuthProvider#verify-phone-number
//       // probably 'unavailable' or 'deadline-exceeded' for loss of connection while querying users
//       newStatus = "Failed to send verification code.";
//       console.log(
//         "Unexpected error during firebase operation: " + JSON.stringify(error)
//       );
//     }

//     this.setState({
//       status: newStatus,
//       processing: false,
//     });
//   });

export default function LoginScreen({ navigation }) {
  const phone = useRef();
  const [input, setInput] = useState("");
  const [country, setCountry] = useState("ke");

  return (
    <View style={tw`flex flex-1 items-center justify-center bg-white`}>
      <View style={tw`items-center m-0`}>
        <Image
          style={[tw`mb-3 w-44 h-24`]}
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
