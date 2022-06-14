import React,{useState,useEffect} from "react";
import { View,Text ,StyleSheet,FlatList,TextInput,ScrollView,TouchableOpacity,Alert,Image} from "react-native";
import axios from "axios";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useSelector} from 'react-redux';
import AnimatedLoader from "react-native-animated-loader";


const AcceptedOffer=({navigate})=>{

 return(
  <View>
  <View>
   <Image source={{uri:"https://oxyloans.com/wp-content/themes/oxyloan/oxyloan/_ui/images/logo4.png"}} style={{height:200,width:200}} >
  </View>
  </View>
 )
}
