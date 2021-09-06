import React from "react";
import { FlatList, Text, Image, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "24",
    title: "Taxi",
    image: "https://www.fremont.gov/ImageRepository/Document?documentID=42933",
    screen: "Taxi",
  },
  {
    id: "26",
    title: "Car Hire",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQCN4nS8ZJXDiA6Z_lzucgVVmA3lLlPFxPw&usqp=CAU",
    screen: "CarHire",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={[
            tw`mx-auto mb-5 h-44 w-44 rounded-full items-center justify-center bg-yellow-300`,
          ]}
        >
          <View style={tw`items-center`}>
            <Image
              style={[tw`w-24 h-24`, { resizeMode: "contain" }]}
              source={{ uri: item.image }}
            />
            <Text style={tw`text-2xl font-bold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
