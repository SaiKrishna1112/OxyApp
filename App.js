import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
//import 'react-native-reanimated';
import 'react-native-paper';
import { View, TouchableOpacity, Image, StyleSheet, Text ,Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { ImageBackground } from 'react-native';
import { COLORS, SIZES } from './src/constants/theme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import * as Permissions from 'expo-permissions';

import Login1 from './Screens/Login1';
import Login2 from './Screens/Login2';
import LoansType from './Screens/LoansType';
import Registation from './Screens/Registation';
import ViewLoginData from './Screens/ViewLoginData';
import Adv from './Screens/Adv';
import Openpage from './Screens/Openpage';
import Otp1 from './Screens/Otp1';
import Otp2 from './Screens/Otp2';
import Messagespage from './Screens/Messagespage';
import Success from "./Screens/Success";
import Imagess from './Screens/Imagess';
import Details from './Screens/Details';
import Support from './Profile/Support';
import WalletSuccess from './Profile/WalletSuccess';
import ReferralFriend from './Profile/ReferralFriend';
import GPRS from './Profile/Location';
import Docu from './Screens/Docu';
import Contactsss from './Profile/Contact12';
import Tickethistory from './Profile/Tickethistory';
import OngoingDeals from './Profile/OngoingDeals';
import ParticpatedDeals from './Profile/ParticpatedDeals';
import ViewStatement from './Profile/ViewStatement';
import MyClosedDeals from './Profile/MyClosedDeals';
import SingleDeal from './Profile/SingleDeal';
import Withdrawal from './Profile/Withdrawal';
import WithdrawalNormalDeal from './Profile/WithdrawalNormalDeal';
import Withdrawalfromwallet from './Profile/Withdrawalfromwallet';
import PersonalDeals from './Profile/PersonalDeals';
import Withdrawalhistory from './Profile/Withdrawalhistory';
import EmiCalculator from './Profile/EmiCalculator';
import LenderReferralStatus from './Profile/LenderReferralStatus';
import BorrowerReferralFriend from './Borrower/Profile1/BorrowerReferralFriend';
import BorrowerReferralStatus from './Borrower/Profile1/BorrowerReferralStatus';
import MyloanRequest from './Borrower/Profile1/MyloanRequest';
import AcceptedLoans from './Borrower/Profile1/AcceptedLoans';
import Enach from './Borrower/Profile1/enach';
import AcceptedOffer from './Borrower/Profile1/AcceptedOffer';
import Login from './Screens/Login';
import Registration from './Screens/Registration';
import Generating from './Tabs/Generating';
import BankVerify from './Tabs/BankVerify';
import Inviting from './Tabs/Inviting';
import NumberVerify from './Tabs/NumberVerify';
import ReferralStatus from './Tabs/ReferralStatus';
import NeoBank from './Tabs/NeoBank';
//import Download from './Tabs/Downloads';
import bgm from './src/Images/bgm.jpg';
import MaintabScreen from './Screens1/MaintabScreen';
import BorrowerMaintabScreen from './Borrower/BorrowerMaintabScreen';
import {DrawerContent} from './Screens1/DrawerContent';
import {BorrowerDrawerContent} from './Borrower/BorrowerDrawerContent';
import {PartnerDrawerContent} from './Tabs/PartnerDrawerContent';
import PartnerMaintabScreen from './Tabs/PartnerMaintabScreen';

import { createStore } from 'redux';
import allReducers from './src/reducers';
import { Provider } from 'react-redux';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener","ViewPropTypes"]);
const store = createStore(
               allReducers
              );

const Stack = createStackNavigator();

// const Slides = [{
//         id: 1,
//         title: 'Get Free Movie Tickets ',
//         discripition: 'Be a part of OxyLoans',
//         image: require('./src/Images/oxy.png')
//
//     },
//     {
//         id: 2,
//         title: 'Sarkaru Vaari Paata',
//         discripition: 'Register in OxyLoans and get 5 movie tickets FREE',
//         image: require('./src/Images/oxy2.png')
//     },
//     {
//         id: 3,
//         title: 'Keep a Note',
//         discripition: '*hyderbad thearters only          *Tickets allocated based on your Credit score and Details',
//         image: require('./src/Images/oxy3.png')
//     }
// ]

const App = () => {
const Drawer = createDrawerNavigator();

function LenderDrawer() {
  return (
   <Drawer.Navigator screenOptions = {{headerShown: false}} drawerContent={props => <DrawerContent {...props}/> }>
        <Drawer.Screen name="HomeDrawer" component={MaintabScreen}  />
    </Drawer.Navigator>
  );
}
function BorrowerDrawer() {
  return (
   <Drawer.Navigator screenOptions = {{headerShown: false}} drawerContent={props => <BorrowerDrawerContent {...props}/> }>
        <Drawer.Screen name="HomeDrawer" component={BorrowerMaintabScreen}  />
    </Drawer.Navigator>
  );
}
function PartnerDrawer(){
  return(
  <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props => <PartnerDrawerContent {...props}/> }>
  <Drawer.Screen name="HomeDrawer" component={PartnerMaintabScreen} />
</Drawer.Navigator>
  )
}
    // const [ShowHomePage, SetShowHomePage] = useState(false);
    //
    // const buttonlabel = (label) => {
    //     return (
    //      <View style = {{ padding: 12 } } >
    //         <Text style = {
    //             { color: COLORS.title, fontSize: SIZES.h3 } } > { label } < /Text>
    //             </View>
    //     )
    // }
    //
    // if (!ShowHomePage) {
    //     return (
    //      <AppIntroSlider data = { Slides }
    //         renderItem = {
    //             ({ item }) => {
    //                 return (
    //
    //                     <ImageBackground style = {
    //                         {
    //                             flex: 1,
    //                             alignItems: 'center',
    //                             padding: 15,
    //                             paddingTop: 40,
    //                         }
    //                     }
    //                     source = { bgm } >
    //                     <Image source = { item.image }
    //                     style = {
    //                         {
    //                             width: SIZES.width - 50,
    //                             height: 500,
    //                         }
    //                     }
    //                     resizeMode = "contain" />
    //                     <Text style = {
    //                         {
    //                             fontWeight: 'bold',
    //                             color: COLORS.title,
    //                             fontSize: SIZES.h1,
    //                             marginBottom: 7,
    //                             bottom: 60,
    //
    //
    //                         }
    //                     } > { item.title }
    //                     </Text>
    //                     <Text style = {
    //                         {
    //                             textAlign: 'center',
    //                             fontWeight: 'bold',
    //                             color: COLORS.title2,
    //                             fontSize: SIZES.h2,
    //                             bottom: 30,
    //
    //                         }
    //                     } > { item.discripition }
    //                     </Text>
    //                     </ImageBackground>
    //                 )
    //             }
    //         }
    //         activeDotStyle = {
    //             { backgroundColor: COLORS.primary, width: 20 } }
    //         showSkipButton renderNextButton = {() => buttonlabel('Next') }
    //         renderSkipButton = {() => buttonlabel('Skip') }
    //         renderDoneButton = {() => buttonlabel('Done') }
    //         onDone = {() => { SetShowHomePage(true);}}
    //         onSkip = {() => { SetShowHomePage(true); } }
    //         />
    //     )
    // }
    return (
     <Provider store={store}>
     <NavigationContainer >
        <Stack.Navigator initialRouteName = "Openpage"
        screenOptions = {{
                headerTintColor: 'red',
                headerTitleStyle: styles.headerTitleStyle,
                headerMode: 'float',
                headerShown: false}}>
        <Stack.Screen name = "OxyLoans" component = { Openpage }/>
        <Stack.Screen name = "LoansType" component = { LoansType } />
        <Stack.Screen name = "Adv"component = { Adv }/>
        <Stack.Screen name = "Login1" component = { Login1 }/>
        <Stack.Screen name = "Login2" component = { Login2 }/>
        <Stack.Screen name = "Login" component = { Login }/>
        <Stack.Screen name = "Registration" component = { Registration }/>
        <Stack.Screen name = "ViewLoginData" component = { ViewLoginData }/>
        <Stack.Screen name = "Registation" component = { Registation }/>
        <Stack.Screen name = "Otp1" component = { Otp1 }/>
        <Stack.Screen name = "Messagespage"component = { Messagespage }/>
        <Stack.Screen name = "Success"component = { Success }/>
        <Stack.Screen name = "Otp2"component = { Otp2 }/>
        <Stack.Screen name = "Imagess"component = { Imagess }/>
        <Stack.Screen name = "Details"component = { Details }/>
        <Stack.Screen name = "Support" component = { Support }/>
        <Stack.Screen name = "ReferralFriend" component = { ReferralFriend } />
        <Stack.Screen name = "LenderReferralStatus" component = { LenderReferralStatus } />
        <Stack.Screen name = "WalletSuccess" component = { WalletSuccess } />
        <Stack.Screen name = "Docu" component = { Docu } />
        <Stack.Screen name = "GPRS" component = { GPRS } />
        <Stack.Screen name = "Contact12" component = { Contactsss } />
        <Stack.Screen name = "Tickethistory" component = { Tickethistory } />
        <Stack.Screen name = "OngoingDeals" component = { OngoingDeals } />
        <Stack.Screen name = "ParticpatedDeals" component = { ParticpatedDeals } />
        <Stack.Screen name = "ViewStatement" component = { ViewStatement } />
        <Stack.Screen name = "MyClosedDeals" component = { MyClosedDeals } />
        <Stack.Screen name = "SingleDeal"  component = { SingleDeal } />
        <Stack.Screen name = "Withdrawal" component = { Withdrawal } />
        <Stack.Screen name = "EmiCalculator" component = { EmiCalculator } />
        <Stack.Screen name = "WithdrawalNormalDeal" component = { WithdrawalNormalDeal } />
        <Stack.Screen name = "Withdrawalfromwallet" component = { Withdrawalfromwallet } />
        <Stack.Screen name = "Withdrawalhistory" component = { Withdrawalhistory } />
        <Stack.Screen name = "PersonalDeals" component = { PersonalDeals } />
        <Stack.Screen name = "BorrowerReferralFriend" component = { BorrowerReferralFriend } />
        <Stack.Screen name = "BorrowerReferralStatus" component = { BorrowerReferralStatus } />
        <Stack.Screen name = "MyloanRequest" component = { MyloanRequest } />
        <Stack.Screen name = "Enach" component = { Enach } />
        <Stack.Screen name = "AcceptedLoans" component = { AcceptedLoans } />
        <Stack.Screen name = "AcceptedOffer" component = { AcceptedOffer } />
        <Stack.Screen name = "Inviting" component = { Inviting } />
        <Stack.Screen name = "BankVerify" component = { BankVerify } />
        <Stack.Screen name = "Generating" component = { Generating } />
        <Stack.Screen name = "NumberVerify" component = { NumberVerify } />
        <Stack.Screen name = "ReferralStatus" component = { ReferralStatus } />
        <Stack.Screen name = "NeoBank" component = { NeoBank } />

        <Drawer.Screen name = "LenderDrawer" component = { LenderDrawer } />
        <Drawer.Screen name = "BorrowerDrawer" component = { BorrowerDrawer }/>
        <Drawer.Screen name = "PartnerDrawer" component = { PartnerDrawer }/>
        </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}
const styles = StyleSheet.create({
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'black',
    },
});
export default App;
