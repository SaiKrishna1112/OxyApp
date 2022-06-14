import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import React from 'react';

import HomeScreen from '../Tabs/HomeScreen';

import SettingsScreen from '../Tabs/SettingsScreen';

import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';


const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const PartnerMaintabScreen=()=>(
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
        //   tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={24} />
          ),
        }}
      />

    </Tab.Navigator>
  );

export default PartnerMaintabScreen;



const HomeStackScreen = ({navigation})=>(
    <HomeStack.Navigator screenOptions={{
   headerStyle: {
     backgroundColor : '#009387',
   },
   headerTintColor:'#fff',
   headerTitleStyle:{
     fontWeight:'bold'
   }
 }}>
   <HomeStack.Screen name="Home" component={HomeScreen} options={{
     headerLeft:()=>(
     <Icon.Button name="ios-menu" size={30} backgroundColor="#009387" onPress={()=>navigation.toggleDrawer()}></Icon.Button>
     )
   }}/>

 </HomeStack.Navigator>
);

const SettingsStackScreen = ({navigation})=>(
<SettingsStack.Navigator screenOptions={{
headerStyle: {
backgroundColor : '#009387',
},
headerTintColor:'#fff',
headerTitleStyle:{
fontWeight:'bold'
}
}}>
<SettingsStack.Screen name="Settings" component={SettingsScreen}
options={{
headerLeft:()=>(
<Icon.Button name="ios-menu" size={35} backgroundColor="#009387" onPress={()=>navigation.toggleDrawer()}></Icon.Button>
)
}}
/>
</SettingsStack.Navigator>
);
