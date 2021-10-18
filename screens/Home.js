import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import firebase from "../firebase";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import Constants from "expo-constants";

import NavOptions from "../components/NavOptions";
import Login from "../components/Login";

const Home = () => {
  const recaptchaVerifier = useRef(null);
  const attemptInvisibleVerification = false;
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const [message, showMessage] = useState(
    !firebase
      ? {
          text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.",
        }
      : undefined
  );

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (user == null) {
    return (
      <View style={tw`p-10 mt-10`}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={Constants.manifest.extra.firebase}
          attemptInvisibleVerification={attemptInvisibleVerification}
        />
        <View>
          <Text style={{ marginTop: 20 }}>Enter phone number</Text>
          <TextInput
            style={{ marginVertical: 10, fontSize: 17 }}
            placeholder="+1 999 999 9999"
            autoFocus
            autoCompleteType="tel"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
          <Button
            title="Send Verification Code"
            disabled={!phoneNumber}
            onPress={async () => {
              try {
                const phoneProvider = new firebase.auth.PhoneAuthProvider();
                const verificationId = await phoneProvider.verifyPhoneNumber(
                  phoneNumber,
                  recaptchaVerifier.current
                );
                setVerificationId(verificationId);
                showMessage({
                  text: "Verification code has been sent to your phone.",
                });
              } catch (err) {
                showMessage({ text: `Error: ${err.message}`, color: "red" });
              }
            }}
          />
          <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
          <TextInput
            style={{ marginVertical: 10, fontSize: 17 }}
            editable={!!verificationId}
            placeholder="123456"
            onChangeText={setVerificationCode}
          />
          <Button
            title="Confirm Verification Code"
            disabled={!verificationId}
            onPress={async () => {
              try {
                const credential = firebase.auth.PhoneAuthProvider.credential(
                  verificationId,
                  verificationCode
                );
                await firebase.auth().signInWithCredential(credential);
                showMessage({ text: "Phone authentication successful 👍" });
              } catch (err) {
                showMessage({ text: `Error: ${err.message}`, color: "red" });
              }
            }}
          />
          {message ? (
            <TouchableOpacity
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: 0xffffffee, justifyContent: "center" },
              ]}
              onPress={() => showMessage(undefined)}
            >
              <Text
                style={{
                  color: message.color || "blue",
                  fontSize: 17,
                  textAlign: "center",
                  margin: 20,
                }}
              >
                {message.text}
              </Text>
            </TouchableOpacity>
          ) : undefined}
        </View>
        {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
      </View>
    );
  }

  return (
    <SafeAreaView style={tw`h-full bg-black`}>
      <View style={tw`bg-black mt-5 items-center justify-center`}>
        <View style={tw`items-center m-0`}>
          <Image
            style={[tw`w-56 h-24`]}
            source={require("../assets/splash.png")}
          />
        </View>
        <NavOptions user={user} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
