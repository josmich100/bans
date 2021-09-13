import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "Economical",
    icon: "home",
    cost: 1,
    destination: "Keroka,Kenya",
  },
  {
    id: "Business",
    icon: "briefcase",
    cost: 1.25,
    destination: "Keumbu,Kenya",
  },
  {
    id: "Luxury",
    icon: "home",
    cost: 1.6,
    destination: "Keroka,Kenya",
  },
];
const RideOptionsCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={[tw`absolute top-3 left-3 p-3 z-50`]}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
