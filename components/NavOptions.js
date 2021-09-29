import React from "react";
import { FlatList, Text, Image, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "24",
    title: "Taxi Screen",
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

const NavOptions = (props) => {
  const navigation = useNavigation();
  return (
    <FlatList
      style={tw`m-2 p-2`}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={[
            tw`h-36 w-36 items-center justify-center mx-auto mb-5 rounded-full`,
            { backgroundColor: "#ffce00" },
          ]}
        >
          <View style={tw`items-center`}>
            <Icon
              type="font-awesome-5"
              name={item.icon}
              size={48}
              color="#000000"
            />
            <Text style={tw`text-2xl font-bold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
