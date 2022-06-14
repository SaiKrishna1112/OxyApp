import React from "react";
import {Animated,View,Text,Button,SafeAreaView,TouchableOpacity,FlatList,StyleSheet,Image}from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ViewLoginData=param=>{
    console.log(param);
    console.log("livin1hdikgis");
    console.log(param.route.params.logindata);
    console.log("livin1khakja");


const GetLoginData=param.route.params.logindata;
console.log("livin1");
console.log(GetLoginData);
console.log("livin2");

    return(
    <View style={styles.Data}> 
    
    <View><Image source={require('./assets/background.jpg')} style={{height:1000}}></Image></View>
        <View style={styles.Datatext}>
            <View><Image source={require('./assets/avatar.png')} style={{height:120,width:120,position:'absolute',bottom:40,left:70}}></Image></View>
        <View><Text style={{fontSize:26,
        paddingBottom:10}}>WellCome To Oxyloans </Text></View>
        <View style={{borderBottomColor:'#f2b900',borderBottomWidth:5}}></View>
            <Text style={styles.Text}> firstName :{GetLoginData.firstName}</Text>
            <Text style={styles.Text}> email :{GetLoginData.email}</Text>
            <Text style={styles.Text}> id :{GetLoginData.id}</Text>
            <Text style={styles.Text}> primaryType :{GetLoginData.primaryType}</Text>
            <Text style={styles.Text}> mobileNumber :{GetLoginData.mobileNumber}</Text>
        </View>
        </View>
       
        
      
    )
}

const styles=StyleSheet.create({
    Data:{
         alignItems:'center',
         justifyContent:'center',
    },
    Datatext:{
        position:'absolute',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingTop:80,
        height:400,
        borderColor:'#f2b900',
        borderWidth:7
      
    },
    Text:{
      fontSize:20,
      paddingVertical:10
    }
})

export default ViewLoginData;