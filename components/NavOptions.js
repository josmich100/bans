import React from "react";
import { FlatList, Text, Image, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "24",
    title: "Get Taxi",
    icon: "taxi",
    screen: "Taxi",
  },
  {
    id: "26",
    title: "Car 4 Hire",
    icon: "car-side",
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
          style={tw`h-36 w-36 items-center justify-center mx-auto mb-5 rounded-full bg-yellow-300`}
        >
          <View style={tw`items-center`}>
            {/* <Image
              style={[tw`w-20 h-20`, { resizeMode: "contain" }]}
              source={{ uri: item.icon }}
            /> */}
            <Icon
              type="font-awesome-5"
              name={item.icon}
              size={48}
              color="#000"
            />
            <Text style={tw`text-2xl font-bold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
