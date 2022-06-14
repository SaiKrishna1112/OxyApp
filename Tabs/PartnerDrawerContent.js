import React from 'react';
import { StyleSheet, View,TouchableOpacity} from 'react-native';
// import MaterialIcon from 'material-icons-react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {useSelector} from "react-redux";

import {
   Avatar,
   Title,
   Caption,
   Drawer,
   Paragraph,
   Text,
   TouchableRipple,
   Switch,

} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem,
 } from '@react-navigation/drawer';

 import Icon from 'react-native-vector-icons/Ionicons';

 export function PartnerDrawerContent(props){
    const count =useSelector(state=>state.counter);
    console.log("=====================================");
     return(
           <View style={{flex:1}}>

               <DrawerContentScrollView {...props} style={{flex:1,marginLeft:20,marginTop:30}}>

                <View style={{flexDirection:'row'}}>
                        <Avatar.Image size={70} source={require('../Images/bhargav.jpeg')} />


                   <View style={{flexDirection:'column',marginLeft:30,marginTop:10}}>
                       <Text style={{fontSize:17,fontWeight:"bold"}}>{count.data.partnerUtmName}</Text>
                       <Text style={{fontSize:13,marginLeft:10}}>{count.data.userType}</Text>



                   </View>



                </View>


               </DrawerContentScrollView>

               <View style={{flex:4.4}}>
               <DrawerContentScrollView >
                <Drawer.Section >
                   <DrawerItem
                   icon={({color,size})=>(
                       <Icon
                       name='home'
                       color={color}
                       size={size}
                       />
                   )}
                   label='Home'
                   onPress={()=>{props.navigation.navigate('Home')}}
                   />

                <DrawerItem

                   icon={({color,size})=>(
                    <MaterialCommunityIcons name="bank" color={color} size={size}/>

                   )}
                   label='Bank Details'
                   onPress={()=>{props.navigation.navigate('BankVerify')}}

                   />
                      <DrawerItem
                   icon={({color,size})=>(
                       <Icon
                       name='document'
                       color={color}
                       size={size}
                       />
                   )}
                   label='Generate NDA and MOU'
                   onPress={()=>{props.navigation.navigate('Generating')}}
                   />
                     <DrawerItem
                   icon={({color,size})=>(
                       <Icon
                       name='cloud-upload'
                       color={color}
                       size={size}
                       />

                   )}
                   label='Upload NDA and MOU'
                   onPress={()=>{}}
                   />


                <DrawerItem
                   icon={({color,size})=>(
                       <Icon
                       name='alert-circle'
                       color={color}
                       size={size}
                       />
                   )}
                   label='Support'
                   onPress={()=>{}}
                   />
               </Drawer.Section>

               </DrawerContentScrollView>
               </View>

               <Drawer.Section style={{margin:20,marginBottom:50}}>
                   <DrawerItem
                   icon={({color,size})=>(
                       <Icon
                       name='log-out-outline'
                       color={color}
                       size={size}
                       />
                   )}
                   label='Sign Out'
                   onPress={()=>{props.navigation.navigate('Login')}}

                   />
               </Drawer.Section>

           </View>
     );
 }
