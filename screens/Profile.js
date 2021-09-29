import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import * as DocumentPicker from "expo-document-picker";
import tw from "tailwind-react-native-classnames";

const Profile = () => {
  return (
    <View style={tw`items-center`}>
      <Avatar
        rounded
        size="xlarge"
        source={{
          uri: "https://www.pngmart.com/files/4/Car-Transparent-Background.png",
        }}
      />
      <Text>Name</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
      />
      <Text>ID Number</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
      />
      <Text>Phone</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
      />
      <TouchableOpacity onPress={() => DocumentPicker.getDocumentAsync({})}>
        <Text>upload pictures</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
