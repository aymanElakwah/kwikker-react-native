import React, { Component } from 'react';
import Notifications from './../Screens/Notifications/Notifications'
import { createStackNavigator, CreateAppContainer } from 'react-navigation'

const NotificationsStackNavigator = createStackNavigator({

    Notifictions: { screen: Notifications }
});
export default NotificationsStackNavigator