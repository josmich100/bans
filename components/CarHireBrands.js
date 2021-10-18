import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Button, Card, Icon, PricingCard } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import Favorites from "./Favorites";

const CarHireBrands = (props) => {
  const [itemsList, setItemsList] = useState(null);

  return (
    <View>
      {/* if(itemsList== null){setItemsList(props.brand)};
      {itemsList &&
        itemsList.map((item, index) => {
          //setItemsList(brand);
          <View>
            {console.log(itemsList)} */}
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={props.brand}
        renderItem={(item) => (
          <View>
            <Card>
              {console.log(item)}
              <Card.Title>{item.name}</Card.Title>
              <Card.Divider />
              <Card.Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
                }}
                resizeMode="contain"
              />
              <Button
                icon={<Icon name="code" color="#ffffff" />}
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
              />
            </Card>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
      />
      {/* </View>;
        })} */}
    </View>
  );
};

export default CarHireBrands;

// <Card>
//   <Card.Title>{u.class}</Card.Title>
//   <Card.Divider />
//   <FlatList
//     horizontal
//     pagingEnabled={true}
//     showsHorizontalScrollIndicator={false}
//     legacyImplementation={false}
//     data={u.class}
//     renderItem={(item) => (
//       <View style={tw`py-2 flex-row`}>
//         business
//         <View
//           style={{
//             width: 5,
//             backgroundColor: "white",
//           }}
//         />
//       </View>
//     )}
//     keyExtractor={(cars) => cars.id}
//     style={{ width: "100%" }}
//   />
//   {/* <View style={tw`py-2 flex-row bg-black`}>
//   <View>
//     <Card.Image
//       source={{
//         uri: "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
//       }}
//     />
//     <Button
//       icon={<Icon name="code" color="#ffffff" />}
//       buttonStyle={{
//         borderRadius: 0,
//         marginLeft: 0,
//         marginRight: 0,
//         marginBottom: 0,
//       }}
//       title="VIEW NOW"
//     />
//   </View>
//   <View>
//     <Card.Image
//       source={{
//         uri: "https://firebasestorage.googleapis.com/v0/b/ananab-8039a.appspot.com/o/images%2F93d8fe44-0b77-4e1a-8bd9-d89c311e6e56?alt=media&token=ae566b0c-4934-4856-8fb0-1f7b05fefa35",
//       }}
//     />

//     <Text style={{ marginBottom: 4 }}>
//       The idea with React Native Elements is more about component
//       structure than actual design.
//     </Text>
//   </View>
// </View> */}
// </Card>;
