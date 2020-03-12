import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react';
import MainPageContainer from "../Container/MainPageContainer";
import NewsContainer from "../Container/NewsContainer";
import AccountContainer from "../Container/AccountContainer";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default BottomTabNav = createBottomTabNavigator(
    {
        Main: {
            screen: MainPageContainer,
            navigationOptions: {
                tabBarLabel: "Főoldal",
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="home" style={{fontSize:30,color:"#3b5998"}} />
                ),
            },

        },
        News: {
            screen:NewsContainer,
            navigationOptions: {
                tabBarLabel: "Utazás",
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="plane" style={{fontSize:30,color:"#3b5998"}} />
                ),
            },
        },
        Account:{
            screen:AccountContainer,
            navigationOptions:{
                tabBarLabel: "Beállítások",
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="user" style={{ fontSize: 30, color: "#3b5998" }} />
                ),
            }
        }
    },
    {
        initialRouteName: "Main",
        headerRight: null,
      
    }
)
