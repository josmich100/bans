import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Profile from "../../screens/Profile";
import { MainStack } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  // headerTitle: (props) => <LogoTitle {...props} />,
  headerStyle: {
    backgroundColor: "#ffce00",
  },
  headerTintColor: "#000",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerBackTitle: "Back",
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={
        (screenOptionStyle,
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (route.name === "Home") {
              icon = "home";
            } else if (route.name === "Profile") {
              icon = "cog";
            }

            return (
              <Icon
                type="font-awesome-5"
                name={icon}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#ffce00",
          tabBarInactiveTintColor: "#000000",
        }))
      }
    >
      <Tab.Screen name="Home" component={MainStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTabs;
