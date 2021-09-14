import * as React from "react";
import { Image, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

import Carousel from "react-native-snap-carousel";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Welcome",
          text: "ananab is a taxi and car hire app",
        },
        {
          title: "What it does",
          text: "ananab ",
        },
        {
          title: "Get started",
          text: "Login here",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={tw`h-full w-full p-10 mx-3 bg-yellow-300 rounded justify-end`}
      >
        <Text style={tw`text-2xl font-bold`}>{item.title}</Text>
        <Text style={tw`text-lg`}>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={tw`flex-1 bg-white pt-10`}>
        <View style={tw`flex-1 flex-row justify-center`}>
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}
