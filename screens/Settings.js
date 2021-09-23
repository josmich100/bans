import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Avatar } from "react-native-elements";

const Settings = () => {
  return (
    <SafeAreaView>
      <Avatar
        rounded
        source={{
          uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;
