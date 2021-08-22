import React from 'react'
import {FlatList, Text,Image, View,TouchableOpacity } from 'react-native'
import tw from "tailwind-react-native-classnames";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "24",
        title: "Get a ride",
        image: "https://www.fremont.gov/ImageRepository/Document?documentID=42933",
        screen: "MapScreen",
    },
    {
        id: "26",
        title: "Hire a car",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQCN4nS8ZJXDiA6Z_lzucgVVmA3lLlPFxPw&usqp=CAU",
        screen: "HireScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <FlatList 
        data ={data}
        horizontal
        keyExtractor= {(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity 
            onPress = {()=> navigation.navigate(item.screen)}
            style={tw`p-2 bg-gray-200 m-2`}>
                <View>
                    <Image
                    style={{width:120, height: 120, resizeMode:"contain"}}
                    source={{uri:item.image}}
                    />
                    <Text style={tw`text-lg font-semibold`}>
                    {item.title}
                </Text>
                <Icon
                    style={tw`p-2 bg-white rounded-md w-10 mt-4`}
                    name='arrowright'
                    type='antdesign'
                    color='#517fa4'
                />
                </View>
                
            </TouchableOpacity>
    )}
        
        />
    )
}

export default NavOptions
