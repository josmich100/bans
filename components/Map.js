import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from "react-native-maps";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import { useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  //const { modalVisible, setModalVisible } = SetRoute();
  const mapRef = useRef(null);
  useEffect(() => {
    if (!origin || !destination) return;

    //zoom out and fit
    mapRef.current.fitToSuppliedMarkers([
      "origin",
      "destination",
      {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      },
    ]);
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(setTravelTime(data.rows[0].elements[0]));
        });
    };
    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <View style={[tw`flex-1 `]}>
      <MapView
        ref={mapRef}
        style={tw`flex-1`}
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            lineDashPattern={[3]}
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="blue"
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Current Location"
            decription={origin.description}
            identifier="origin"
          />
        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            decription={destination.description}
            identifier="destination"
          />
        )}
      </MapView>
      
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
