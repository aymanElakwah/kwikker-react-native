import React, { Component } from 'react';
import { createStackNavigator, CreateAppContainer } from 'react-navigation';
import Messages from '../Screens/Messages/Messages';
import ConversationScreen from '../Screens/ConversationScreen/ConversationScreen';

const MessagesStackNavigator = createStackNavigator({

  Messaages: {
    screen: Messages,
    navigationOptions: {
      title: 'Messages'
    }
  },

  ConversationScreen: { screen: ConversationScreen }
});
MessagesStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
export default MessagesStackNavigator;