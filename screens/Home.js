import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import firebase from "../firebase";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import Constants from "expo-constants";

import NavOptions from "../components/NavOptions";
import Login from "../components/Login";
import MainNavigator from "../components/navigation/DrawerNavigator";

const Home = () => {
  const recaptchaVerifier = useRef(null);
  const attemptInvisibleVerification = false;
  
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

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
      <View style={{ padding: 20, marginTop: 50 }}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={Constants.manifest.extra.firebase}
          attemptInvisibleVerification={attemptInvisibleVerification}
        />
        <Login />
        {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View style={tw`p-10 bg-white items-center justify-center`}>
        <View style={tw`items-center m-0`}>
          <Image
            style={[tw`mb-3 w-44 h-24`]}
            source={require("../assets/splash.png")}
          />
        </View>
        <NavOptions user={user} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
