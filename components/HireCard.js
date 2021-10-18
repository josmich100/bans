import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Card, ListItem, Button, Icon, Tile } from "react-native-elements";
import Favorites from "./Favorites";
import CarHireBrands from "./CarHireBrands";
import { ScrollView } from "react-native";

const brands = [
  {
    id: "1",
    class: "family",
  },
  {
    id: "2",
    class: "business",
  },
  {
    id: "3",
    class: "luxury",
  },
];

const family = [
  {
    id: "1",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
  {
    id: "2",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
  {
    id: "4",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
  {
    id: "7",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
];
const business = [
  {
    id: "1",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
  {
    id: "2",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
  {
    id: "4",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
  {
    id: "7",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
];
const luxury = [
  {
    id: "1",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
  {
    id: "2",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
  {
    id: "4",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
  {
    id: "7",
    name: "brynn",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
  },
];

const HireCard = () => {
  return (
    <View style={tw`container m-auto mt-5`}>
      <SafeAreaView>
        <ScrollView>
          <Tile
            imageSrc={{
              uri: "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
            }}
            title="Lorem ipsum dolor situr"
            contentContainerStyle={{ height: 70 }}
          />
          <CarHireBrands brand={luxury} />

          <CarHireBrands brand={family} />

          <CarHireBrands brand={business} />
          {/* <Button title="Loading button" loading />
        {users.map((u, i) => {
          return (
            <FlatList
              data={users}
              key={i}
              ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
              )}
              renderItem={() => (
                <View>
                  <Card style={tw`flex-row`}>
                    <Card.Title>TOP SEARCHES</Card.Title>
                    <Card.Divider />
                    {cars.map((u, i) => {
                      return (
                        <FlatList
                          horizontal
                          data={cars}
                          ItemSeparatorComponent={() => (
                            <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
                          )}
                          key={i}
                          renderItem={() => {
                            <Card>
                              <Image
                                style={{ width: 200, height: 200 }}
                                resizeMode="cover"
                                source={{ uri: u.avatar }}
                              />
                              <Text>{u.name}</Text>
                            </Card>;
                          }}
                        />
                      );
                    })}
                  </Card>
                  <Card style={tw`flex-row`}>
                    <Card.Title>CARD WITH DIVIDER</Card.Title>
                    <Card.Divider />
                    {users.map((u, i) => {
                      return (
                        <View key={i} style={tw`flex-row`}>
                          <Image
                            style={{ width: 200, height: 200 }}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                          />
                          <Text>{u.name}</Text>
                        </View>
                      );
                    })}
                  </Card>
                </View>
              )}
            />
          );
        })} */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HireCard;
