import React, { useState } from 'react';
import {View,Text,Button,SafeAreaView,TouchableOpacity,FlatList,StyleSheet,Image,Alert,
 ScrollView,Linking}from "react-native";
//import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

const ViewLoginData=param=>{
    //console.log(param.route.params.logindata);
const GetLoginData=param.route.params.logindata;
//console.log(GetLoginData);
const [pickedImagePath, setPickedImagePath] = useState('');
const [pickedDocuPath, setPickedDocuPath] = useState('');
var lender;
var BR;
var LR;
const showImagePicker = async () => {
  // Ask the user for the permission to access the media library
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  const permissionResults = await DocumentPicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("You've refused to allow this appp to access your photos!");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync();

  // Explore the result
  console.log(result);

  if (!result.cancelled) {
    setPickedImagePath(result.uri);
    console.log(result.uri);
  }
}

// This function is triggered when the "Open camera" button pressed
const openCamera = async () => {
  // Ask the user for the permission to access the camera
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("You've refused to allow this appp to access your camera!");
    return;
  }

  const result = await ImagePicker.launchCameraAsync();

  // Explore the result
  console.log(result);

  if (!result.cancelled) {
    setPickedImagePath(result.uri);
    console.log(result.uri);
    alert(result);
  }
}
const pickDocument = async () => {
  const result = await DocumentPicker.getDocumentAsync();
  console.log(result);
  if (!result.cancelled) {
    setPickedDocuPath(result);
    console.log(result.uri);
    alert(result);
      console.log(result);
  }
}

    return(
     <ScrollView>
    <View style={styles.Data}>
    <View>
    <Image source={require('../assets/background.jpeg')} style={{height:900}} />
    </View>
        <View style={styles.Datatext}>
            <View><Image source={require('../assets/avatar.png')} style={{height:120,width:120,position:'absolute',bottom:40,left:100}} /></View>
        <View><Text style={{fontSize:26,
        paddingBottom:5,paddingLeft:30}}>WelCome To Oxyloans </Text></View>
        <View style={{borderBottomColor:'#f2b900',borderBottomWidth:5,marginTop:10}}></View>
            <Text style={styles.Text}> Name :{GetLoginData.firstName}</Text>
            <Text style={styles.Text}> Email :{GetLoginData.email}</Text>
            <Text style={styles.Text}> UserID :<Text>{GetLoginData.primaryType!='LENDER'? <Text>BR</Text>:<Text>LR</Text>}</Text>
            {GetLoginData.id}</Text>
            <Text style={styles.Text}> Primary Type :{GetLoginData.primaryType}</Text>
            <Text style={styles.Text}> Mobile Number :{GetLoginData.mobileNumber}</Text>
            <TouchableOpacity style={styles.appButtonContainer}
            onPress={() => Linking.openURL('upi://pay?pa=oxyloans@icici&pn=oxyloans&tr=MNO34205052022114117=&am=10.00&cu=INR&mc=5411')}>
                <Text style={styles.appButtonText}>Book Your Tickets</Text>
            </TouchableOpacity>
        </View>

     <Text>Upload Your Employee Id Card Images</Text>
     <View style={styles.buttonContainer}>

       <Button onPress={showImagePicker} title="Select an image" />
       <Button onPress={openCamera} title="Open camera" />
       </View>
       <View style={styles.imageContainer}>
         {
           pickedImagePath !== '' && <Image
             source={{ uri: pickedImagePath }}
             style={styles.image}
           />
         }

     </View>
     <Button onPress={pickDocument} title="Open Doc" />
      <View style={styles.imageContainer}>
     {
       pickedDocuPath !== '' && <File
         source={{ uri: pickedDocuPath }}
       />
     }
     <Text>{pickedDocuPath}</Text>
     </View>

             </View>
          </ScrollView>
    )
}

const styles=StyleSheet.create({
    Data:{
         alignItems:'center',
         justifyContent:'center',
         marginLeft:5
    },
    Datatext:{
        position:'absolute',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingTop:100,
        height:500,
        borderColor:'#f2b900',
        borderWidth:7,
    },
    Text:{
      fontSize:18,
      paddingVertical:10,
      paddingLeft:10
    },
    buttonContainer: {
      width: 300,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    imageContainer: {
      padding: 20
    },
    image: {
      width: 300,
      height: 200,
      resizeMode: 'cover'
    },
    appButtonContainer: {
        marginTop:10,
        backgroundColor: "#569F40",
        borderRadius: 17,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width:300,
        marginLeft:10
      },
      appButtonText: {
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",

      },
})

export default ViewLoginData;
