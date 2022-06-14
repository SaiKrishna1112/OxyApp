// import  React,{useState} from "react"
// import {Animated,View,Text,StyleSheet,SafeAreaView,Image,TextInput,Button,FlatList,ActivityIndicator,TouchableOpacity} from "react-native";

// import axios from "axios";




// const LoginScreen1=para=>{

//     const [username,setUsername]=useState("");
//     const [userpass,setuserpass]=useState("");
//     const [currentDate, setCurrentdate]=useState([]);

//     const[load, setLoad]=useState(false);

//     const submitfunctions=async ()=>{
//         setLoad(true);

//         axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/login?grantType=PWD', {
//             email: username,
//            password: userpass,
//           })
//           .then(function (response) {
//             // setCurrentdate([...currentDate, response.data]);

//             setTimeout(function(){
//                 setLoad(false);
//                 para.navigation.navigate("ViewLoginData",{
//                     logindata:response.data
//                 });
//             }, 3000);

//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//     }

//     return(
//         <View style={styles.View}>
            
//         <View>
//              <View style={styles.Header}>
//              <Image source={{uri:"https://www.profitsheets.com/wp-content/uploads/2019/11/oxy-loans-for-women-back-to-work-scheme.jpg"}} style={styles.img} ></Image>
//          <Text style={styles.Text}>WellCome to Oxyloans</Text>
//          </View>
//          <View style={styles.bodyPart}>
//              <Text style={styles.bodyText}>User name</Text>
//              <TextInput placeholder="Enter your name" style={styles.TextInput} onChangeText={(text)=>setUsername(text)}
//                 />
//             <Text style={styles.bodyText}>password</Text>
//             <TextInput placeholder="Enter your password" style={styles.TextInput} secureTextEntry={true} onChangeText={(pass)=>setuserpass(pass)}/>
       
//          </View>

//          <View style={styles.footer}>

// <TouchableOpacity onPress={submitfunctions} style={styles.btn}>
//     <Text><Text style={{fontSize:20}}>LOGIN</Text> <ActivityIndicator size="large" color="#00ff00" animating={load} /></Text>
    
// </TouchableOpacity>


//          </View>   
// <TouchableOpacity onPress={()=>{para.navigation.push("BorrowerRegister");}}>
//     <Text>Redister as borrower</Text>
// </TouchableOpacity>        
//         </View>
//         </View>
//     )
// }

// const  styles=StyleSheet.create({
// View:{
// flex:1,
// },
// footer:{
// width: 200,
// marginLeft:100,
// margin:20,justifyContent:'center',flexDirection:'row',
// fontSize:20
// },
// bodyText:{
// marginHorizontal:10,
// fontSize:16
// },
// Header:{
// margin:30,
// justifyContent:'center',
// alignItems:"center"
// },
// Text:{
//     fontSize:30,
 
// },
// img:{
//     height:100,
//     width:100
// },
// TextInput:{
//     borderColor:'grey',
//     borderWidth:2,
//     padding:10,
//     borderRadius:10,
//     marginVertical:10,
//     marginHorizontal:10
// },
// btn:{
//     margin:10,
//    backgroundColor:'grey',
//    padding:10,
//    justifyContent:"center",
//    alignItems:'center'
// }

// })

// export default LoginScreen1;

import React from 'react';
import { StyleSheet, Text, View,Image,Button,TouchableOpacity,TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';





const LoginScreen1=props=> { 
  return (
    <View style={styles.container}>
        <View style={styles.img7}>
            <Image source={require('../Images/bgm.jpg')} style={{height:1000,width:'auto', position:'relative'}}></Image>

            <View style={styles.secimg}>
                <Image source={require('../Images/oxylogowhite.png')} style={{height:60,width:240}}></Image>
            </View>

            <View style={styles.maintext}>
              <Text style={styles.text1}>Welcome Back to Oxyloans</Text>
              <Text style={styles.text2}>Please Login with your email or mobile number to continue with Oxyloans</Text>
            </View>
        </View>
         <Animatable.View 
         animation="slideInUp"
 
         style={styles.backgd2}>

            <View style={{alignItems:'center',top:50}}>

                <View style={{flexDirection:'row',marginBottom:20}}>
                    <TouchableOpacity  style={styles.logemail}>
                        <Text style={styles.logButtonText} >Login with email</Text>
                  </TouchableOpacity>

                  <TouchableOpacity  style={styles.logphone}>
                        <Text style={styles.logphoneButtonText} onPress={()=>{props.navigation.push("Screen2");}}>Login with phone</Text>
                  </TouchableOpacity>
                </View>
                    
                 <Text style={{fontSize:22}}>SIGN IN</Text>

            <View style={styles.inputbox}>
                <Text style={{fontSize:18}}>Email</Text>
                <TextInput placeholder="Enter your Email"/>
            </View> 

            <View style={styles.inputbox}>
                <Text style={{fontSize:18}}>Password</Text>
                <TextInput placeholder="Enter your Password"/>
            </View>  

            
            
            <TouchableOpacity  style={styles.appButtonContainer} onPress={()=>{props.navigation.push("OxyAumGetApi");}}>
                 <Text style={styles.appButtonText}>Login</Text>
            </TouchableOpacity>

            </View>

         </Animatable.View>
        
    </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
    },

    img7:{
        flex:2,
  },

    backgd2:{
        backgroundColor:'white',
        flex:2.5,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
    },

    secimg:{
        top:80,
        position:'absolute',
        margin:10,
 },

    text1:{
          color:'white',
          fontSize:28,
          width:240
   },

   maintext:{
      position:'absolute',
      marginLeft:25,
      marginTop:190,
   },

   text2:{
        marginTop:19,
        color:'white',
        fontSize:18,
        width:350,
    },

    inputbox:{
        position:'relative',
        backgroundColor:'#E8E8E8',
        borderRadius: 16,
        width:330,
        height:'auto',
        alignItems: 'flex-start',
        paddingLeft:20,
        paddingVertical:5,
        margin:10
    },

    appButtonContainer: {
        marginTop:10,
        backgroundColor: "#569F40",
        borderRadius: 17,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width:330
      },
      appButtonText: {
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        
      },
      logemail: {
        backgroundColor: "#569F40",
        borderBottomLeftRadius:15,
        borderTopLeftRadius:15,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 12,
        width:168,
        height:45
    },
    logButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        
      },
      logphone: {
       
        backgroundColor: "#F0F0F0",
        borderBottomRightRadius:15,
        borderTopRightRadius:15,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 12,
        width:168,
        height:45
        
    },

    logphoneButtonText: {
        fontSize: 16,
        color: "#569F40",
        fontWeight: "bold",
     },
});

export default LoginScreen1;