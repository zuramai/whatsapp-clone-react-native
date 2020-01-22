import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Navbar(props) {
    return (
        <View style={{ backgroundColor:"#2193b0", paddingVertical:"20px",paddingHorizontal:"16px", fontSize:"16px"}}>
            <View>
                <Text >Home</Text>
            </View>
        </View>
    );
}
