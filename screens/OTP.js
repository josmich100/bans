import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

// codeInputSubmitted(code) {
//   const { verificationId } = this.state;

//   const credential = firebase.auth.PhoneAuthProvider.credential(
//     verificationId,
//     code
//   );

//   // To verify phone number without interfering with the existing user
//   // who is signed in, we offload the verification to a worker app.
//   let fbWorkerApp = firebase.apps.find(app => app.name === 'auth-worker')
//                  || firebase.initializeApp(firebase.app().options, 'auth-worker');
//   fbWorkerAuth = fbWorkerApp.auth();
//   fbWorkerAuth.setPersistence(firebase.auth.Auth.Persistence.NONE); // disables caching of account credentials

//   fbWorkerAuth.signInWithCredential(credential)
//     .then((userCredential) => {
//       // userCredential.additionalUserInfo.isNewUser may be present
//       // userCredential.credential can be used to link to an existing user account

//       // successful
//       this.setState({
//         status: 'Phone number verified!',
//         verificationId: null,
//         showCodeInput: false,
//         user: userCredential.user;
//       });

//       return fbWorkerAuth.signOut().catch(err => console.error('Ignored sign out error: ', err);
//     })
//     .catch((err) => {
//       // failed
//       let userErrorMessage;
//       if (error.code === 'auth/invalid-verification-code') {
//         userErrorMessage = 'Sorry, that code was incorrect.'
//       } else if (error.code === 'auth/user-disabled') {
//         userErrorMessage = 'Sorry, this phone number has been blocked.';
//       } else {
//         // other internal error
//         // see https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#sign-inwith-credential
//         userErrorMessage = 'Sorry, we couldn\'t verify that phone number at the moment. '
//           + 'Please try again later. '
//           + '\n\nIf the issue persists, please contact support.'
//       }
//       this.setState({
//         codeInputErrorMessage: userErrorMessage
//       });
//     })
// }

const CELL_COUNT = 4;

const OTP = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView
      style={tw`flex-1 items-center justify-center p-10 bg-yellow-300`}
    >
      <Text style={tw`text-2xl text-white text-center font-bold`}>
        Phone Number Verification
      </Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={tw`m-2`}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[
              tw`h-12 w-12 p-2 text-xl border-2 border-white`,
              isFocused && tw`border-black`,
            ]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default OTP;
