import React, { Component } from 'react';
import { Container, Header, View, Tabs, Tab, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Ionicons, Roboto_medium, Roboto } from "@expo/vector-icons";
import * as Font from "expo-font";

import Chats from './components/Chats'
import Status from './components/Status'
import Calls from './components/Calls'

export default class Whatsapp extends Component {
  state = {
    loading: true
  }

async componentDidMount() {
  await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  })
  this.setState({ loading: false })
}
  render() {
    
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "#075e54" }}>
          <Left>
            <Text style={{fontSize:30, color: "#fff"}}>Whatsapp</Text>
          </Left>
        </Header>
        <Tabs tabStyle={{ backgroundColor: "#075e54" }}>
          <Tab heading="Chats" tabStyle={{ backgroundColor: "#075e54" }}>
            <Chats />
          </Tab>
          <Tab heading="Status" tabStyle={{ backgroundColor: "#075e54" }}>
            <Status />
          </Tab>
          <Tab heading="Calls" tabStyle={{ backgroundColor: "#075e54" }}>
            <Calls />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}