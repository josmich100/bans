import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import RNOtpVerify from "react-native-otp-verify";

export default function LoginScreen() {
  getHash = () => RNOtpVerify.getHash().then(console.log).catch(console.log);

  startListeningForOtp = () =>
    RNOtpVerify.getOtp()
      .then((p) => RNOtpVerify.addListener(this.otpHandler))
      .catch((p) => console.log(p));

  otpHandler = (message) => {
    const otp = /(\d{4})/g.exec(message)[1];
    this.setState({ otp });
    RNOtpVerify.removeListener();
    Keyboard.dismiss();
  };

  componentWillUnmount = () => {
    RNOtpVerify.removeListener();
  };

  return (
    <View>
      <OTPInputView
        style={{ width: "80%", height: 200 }}
        pinCount={4}
        code={this.state.code}
        onCodeChanged={(code) => {
          this.setState({ code });
        }}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
