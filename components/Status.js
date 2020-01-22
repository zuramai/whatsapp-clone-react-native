import React from "react";
import { View, Text, Image } from 'react-native';

export default function Chats(props) {
  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingHorizontal: 20, marginBottom: 60 }}>
        <View style={{ width: '20%' }}>
          <Image
            style={{ width: 57, height: 57, borderRadius: 30, marginLeft: 5, borderColor: "#08d428", borderWidth:2 }}
            source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' }} />
        </View>
        <View style={{ width: '70%', flex: 1, flexDirection: "column", marginTop: 2 }}>
          <View style={{ marginBottom: 25 }}>
            <Text style={{ fontSize: 20 }}>My Status</Text>
          </View>
          <View>
            <Text style={{ fontSize: 15, color: "#888" }}>Today 02:48 AM</Text>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#dedede', paddingHorizontal:20, marginTop:15, padding: 10}}>
        <Text style={{color:"#666"}}>Recent Updates</Text>
      </View>
      <View>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingHorizontal: 20, marginBottom: 60 }}>
          <View style={{ width: '20%' }}>
            <Image
              style={{ width: 57, height: 57, borderRadius: 30, marginLeft: 5, borderColor: "#08d428", borderWidth: 2 }}
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' }} />
          </View>
          <View style={{ width: '70%', flex: 1, flexDirection: "column", marginTop: 2 }}>
            <View style={{ marginBottom: 25 }}>
              <Text style={{ fontSize: 20 }}>Ahmad Saugi</Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, color: "#888" }}>Today 02:48 AM</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingHorizontal: 20, marginBottom: 60 }}>
          <View style={{ width: '20%' }}>
            <Image
              style={{ width: 57, height: 57, borderRadius: 30, marginLeft: 5, borderColor: "#08d428", borderWidth: 2 }}
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' }} />
          </View>
          <View style={{ width: '70%', flex: 1, flexDirection: "column", marginTop: 2 }}>
            <View style={{ marginBottom: 25 }}>
              <Text style={{ fontSize: 20 }}>Fahrul Nax Xbata</Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, color: "#888" }}>Today 02:48 AM</Text>
            </View>
          </View>
        </View>
      </View>
    </View>

  );
}
