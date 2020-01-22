import React, { Component } from 'react';
import { Container, Header, View, Tabs, Tab, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Ionicons, Roboto_medium, Roboto } from "@expo/vector-icons";
import * as Font from "expo-font";

import Chats from './components/Chats'
import Status from './components/Status'
import Calls from './components/Calls'

export default class Whatsapp extends Component {
                 componentDidMount() {
                    Font.loadAsync({
                      'Roboto_medium': require('./assets/fonts/Roboto_medium.ttf'),
                    });
                  }
                 render() {
                   
                   return (
                     <Container>
                       <Header hasTabs style={{ backgroundColor: "#128c7e" }}>
                         <Text>Whatsapp</Text>
                       </Header>
                       <Tabs tabStyle={{ backgroundColor: "#128c7e" }}>
                         <Tab heading="Chats">
                           <Chats />
                         </Tab>
                         <Tab heading="Status">
                           <Status />
                         </Tab>
                         <Tab heading="Calls">
                           <Calls />
                         </Tab>
                       </Tabs>
                       <Content>
                         <Text>This is Content Section</Text>
                       </Content>
                       <Footer>
                         <FooterTab>
                           <Button full>
                             <Text>Footer</Text>
                           </Button>
                         </FooterTab>
                       </Footer>
                     </Container>
                   );
                 }
               }