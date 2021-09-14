import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from "react-native-maps";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import SetRoute from "./SetRoute";
import { useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  //const { modalVisible, setModalVisible } = SetRoute();
  const lat = parseFloat(position.coords.latitude);
  const long = parseFloat(position.coords.longitude);

  return (
    <View style={[tw`flex-1 `]}>
      <MapView
        style={[tw`flex-1`]}
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {/*<MapViewDirections
        lineDashPattern={[0]}
        origin={origin.description}
        destination={destination.description}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="blue"
      />

      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="Current Location"
        decription={origin.description}
        identifier="origin"
      /> */}
      </MapView>
      <View style={[tw`items-center`]}>
        <TouchableOpacity
          style={[
            tw`absolute bottom-5 mx-0 p-3 rounded-lg items-center w-5/6 bg-yellow-300`,
          ]}
          onPress={() => {
            setModalOpen(true);
          }}
        >
          <Text style={tw`text-white text-lg font-bold`}>Set Route</Text>
        </TouchableOpacity>
        {modalOpen && <SetRoute setOpenModal={setModalOpen} />}
      </View>
    </View>
  );
};

export default Map;

// const Map = () => {
//   const origin = useSelector(selectOrigin);
//   const destination = useSelector(selectDestination);
//   return (
//     <MapView
//       style={tw`flex-1`}
//       initialRegion={{
//         latitude: origin.location.lat,
//         longitude: origin.location.lng,
//         latitudeDelta: 0.005,
//         longitudeDelta: 0.005,
//       }}
//     >
//       {
//       origin && destination &&(
//         <MapViewDirections
//           lineDashPattern={[0]}
//           origin= {origin.description}
//           destination= {destination.description}
//           apikey= {GOOGLE_MAPS_APIKEY}
//           strokeWidth = {3}
//           strokeColor = "blue"
//         />
//       )}
//       {origin?.location && (
//         <Marker
//           coordinate={{
//             latitude: origin.location.lat,
//             longitude: origin.location.lng,
//           }}
//           title="Current Location"
//           decription={origin.description}
//           identifier="origin"
//         />
//       )}
//     </MapView>
//   );
// };

// export default Map;
