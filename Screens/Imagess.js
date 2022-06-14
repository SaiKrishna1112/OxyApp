import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button , TouchableOpacity } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

function Imagess() {
  // The path of the picked image

const [pickedImagePath, setPickedImagePath] = useState('');
  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

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
    }
  }



// const ImageOptions = {
//     title: 'select image', storageOptions: {skipBackup: true, path: 'images'},
//     maxWidth: 150, maxHeight: 150, chooseFromLibraryButtonTitle: 'Choose from gallery',
// };
// export default class Imagess extends React.Component {
//    ImageUpload() {
//         console.log('UPLOADImage====')
//         alert("Select")
//         ImagePicker.launchImageLibraryAsync(ImageOptions, response => {
//          alert("Image")
//             console.log('Image Response = ', response);
//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.error) {
//                 console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//             } else {
//                 const source = {filename: response.fileName, type: response.type, uri: response.fileSize};
//                 const self = this;
//                 const userId = '';
//                 console.log('source', source)
//
//                 let formData = new FormData();
//                 formData.append("filename", source);
//
//                 // console.log('UPLOADImage====111334')
//                 // this.setState({spinnerBool: true}, () => {
//                 //     axios({
//                 //         method: 'POST',
//                 //         url: 'http://localhoast:8090/api/UploadProfilePic',
//                 //         data: formData,
//                 //         headers: {
//                 //             'Content-Type' :'multipart/form-data'
//                 //         },
//                 //
//                 //     }).then((response) => {
//                 //         console.log('response', response)
//                 //         if (response.status === 200) {
//                 //             console.log('status 200', response)
//                 //             alert("submitted", '')
//                 //         }
//                 //     })
//                 //         .catch((error) => {
//                 //             console.log('error res', response)
//                 //             self.setState({spinnerBool: false, MyProfileResp: ''}, () => {
//                 //                 alert("Error,Message Not submitted")
//                 //                 console.log('Error', error.response);
//                 //             });
//                 //         })
//                 // }
//                // );
//             }
//         });
//     }
//
//
//   render() {
//     return (
//   <View style={{flex:1}}>
//   <TouchableOpacity style={{marginTop:80}} onPress={()=>this.ImageUpload()}>
//   <Text>UplodButton</Text>
//   </TouchableOpacity>
//   </View>
//     );
//   }
// }
//
  return(
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button onPress={()=>this.ImageUpload()} title="Select an image" />
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
    </View>
  );
}
// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover'
  }
});


//
// import React, { Component } from 'react';
// import { Button, Image, Text, View, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
//
// export default class Imagess extends Component {
//   state = {
//     pickerResult: null,
//   };
//
//   _pickImg = async () => {
//     let pickerResult = await ImagePicker.launchImageLibraryAsync({
//       base64: true,
//       allowsEditing: false,
//       aspect: [4, 3],
//     });
//
//     this.setState({
//       pickerResult,
//     });
//   };
//
//   render() {
//     let { pickerResult } = this.state;
//     let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null;
//     imageUri && console.log({uri: imageUri.slice(0, 100)});
//
//     return (
//       <View style={styles.container}>
//         <Button onPress={this._pickImg} title="Open Picker" />
//         {pickerResult
//           ? <Image
//               source={{uri: imageUri}}
//               style={{ width: 200, height: 200 }}
//             />
//           : null}
//         {pickerResult
//           ? <Text style={styles.paragraph}>
//               Keys on pickerResult:
//               {' '}
//               {JSON.stringify(Object.keys(pickerResult))}
//             </Text>
//           : null}
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#34495e',
//   },
// });


// import React, { useState } from 'react';
// import { Button, View } from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
// import * as FileSystem from 'expo-file-system';
//
// const DocPicker = () => {
//     const [ doc, setDoc ] = useState();
//     const pickDocument = async () => {
//         let result = await DocumentPicker.getDocumentAsync({
//          type: "*/*",
//          copyToCacheDirectory: true })
//           .then(response => {
//             if (response.type == 'success') {
//               let { name, size, uri } = response;
//
//            / ------------------------/
//               if (Platform.OS === "android" && uri[0] === "/") {
//                  uri = `file://${uri}`;
//                  console.log(uri);
//                  uri = uri.replace(/%/g, "%25");
//                  console.log(uri);
//               }
//           / ------------------------/
//
//               let nameParts = name.split('.');
//               let fileType = nameParts[nameParts.length - 1];
//               var fileToUpload = {
//                 name: name,
//                 size: size,
//                 uri: uri,
//                 type: "application/" + fileType
//               };
//               console.log(fileToUpload.name, '...............file')
//               setDoc(fileToUpload);
//             }
//           });
//         // console.log(result);
//         console.log("Doc: " + doc.uri);
//     }
//
//     const postDocument = () => {
//         const url = "http://192.168.10.107:8000/upload";
//         const fileUri = doc.uri;
//         console.log("fileeeeeeeeeeeeeeeeeeees"+fileUri);
//         const formData = new FormData();
//         formData.append('document', doc);
//         const options = {
//             method: 'POST',
//             body: formData,
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'multipart/form-data',
//             },
//         };
//         console.log(formData);
//
//         fetch(url, options)
//         .then(function(response){
//          alert("Done")
//         })
//         .catch((error) => console.log(error));
//     }
//
//     return (
//         <View style={{alignSelf:'center',justifyContent:'center',marginTop:100}}>
//             <Button title="Select Document" onPress={pickDocument} />
//             <Button title="Upload" onPress={postDocument} />
//         </View>
//     )
// };
// import  React,{useState} from "react"
// import ExpandableView from '@pietile-native-kit/expandable-view';
// import {View,Text,StyleSheet,Button,TextInput,Image,
//  TouchableOpacity,ScrollView,Alert,ActivityIndicator,ToastAndroid} from "react-native";
//  import { MaterialCommunityIcons } from '@expo/vector-icons';
//  import axios from "axios";
//  import AnimatedLoader from "react-native-animated-loader";
//  import { useSelector } from 'react-redux';
// import * as ImagePicker from 'expo-image-picker';
// import {launchImageLibraryAsync} from 'expo-image-picker';
// import * as DocumentPicker from 'expo-document-picker';
// import * as FileSystem from 'expo-file-system';
// import {FormData,File} from "formdata-node";

// const Support = props => {
//  const userDetails = useSelector(state=>state.counter);
//  var access = userDetails.headers.accesstoken;
//  var id = userDetails.data.id;
//  const [name,setname]=useState();
//  const [number,setnumber]=useState();
//  const [email,setemail]=useState();
//  const [message,setmessage]=useState();
//  const [photoId,setphotoid]=useState();
//  const [loading,setLoading]=useState(false);
//  const [pickedImagePath, setPickedImagePath] = useState('');
//  const [pic,setpic]=useState();
//  const [ doc, setDoc ] = useState();
//  const [docUrl,setdocUrl] = useState();
//   const fd = new FormData();
//  const setToastMsg= msg =>{
//   ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
//  };
//
//  axios({
//      method:'get',
//      url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/gettingMobileAndEmail',
//      headers:{
//            accessToken:access,
//           }
//     })
//      .then(function (response) {
//       setname(response.data.firstName);
//       setemail(response.data.email);
//       setnumber(response.data.mobileNumber);
//            })
//      .catch(function (error) {
//       console.log('error',error);
//     });
//
//    function Submit(){
//     if(name==""){
//      alert("Enter Name")
//      return false;
//     }
//     if(number==""){
//      alert("Enter WhatsApp Number")
//      return false;
//     }
//     if(email==""){
//      alert("Enter Email")
//      return false;
//     }
//          axios({
//              method:'post',
//              url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/readingQueriesFromUsers',
//              data:{
//                query:message,
//                documentId:response.data.documentId,
//                email:email,
//                mobileNumber:number,
//              },
//              headers:{
//                    accessToken:access,
//                   }
//             })
//              .then(function (response) {
//               alert("Thanks,We have received your email and will get back to you with a response soon")
//                    })
//              .catch(function (error) {
//               console.log(error.response.data.errorMessage);
//               console.log("Sai Krishna");
//             });
//    }
//      const pickDocument = async () => {
//          let result = await DocumentPicker.getDocumentAsync({
//           type: "*/*",
//           copyToCacheDirectory: true })
//            .then(response => {
//              if (response.type == 'success') {
//                let { name, size, uri } = response;
//
//             / ------------------------/
//                if (Platform.OS === "android" && uri[0] === "/") {
//                   uri = `file://${uri}`;
//                   console.log(uri);
//                   uri = uri.replace(/%/g, "%25");
//                   console.log(uri);
//                }
//            / ------------------------/
//
//                let nameParts = name.split('.');
//                let fileType = nameParts[nameParts.length - 1];
//                var fileToUpload = {
//                  name: name,
//                  size: size,
//                  uri: uri,
//                  type: "application/" + fileType
//                };
//                fd.append("USERQUERYSCREENSHOT",fileToUpload);
//                console.log(fileToUpload.name, '...............file')
//                console.log(fd)
//                axios({
//                    method:'post',
//                    url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/userQueryScreenshot',
//                    data:fd,
//                    headers:{
//                          accessToken: access,
//                          "content-type": 'multipart/form-data',
//                         }
//                   })
//                    .then(function (response) {
//                     console.log(response);
//                     console.log("Sai krishna");
//                     alert("Successfully Upload")
//                     setphotoid(response.data.documentId);
//                    })
//              .catch(function (error) {
//               console.log('error',error);
//               console.log("Upload Sai Krishna");
//             });
//                console.log(fd._parts)
//                console.log(fileToUpload.uri);
//                setDoc(fileToUpload.name)
//                setdocUrl(fileToUpload.uri)
//              }
//            });
//          // console.log(result);
//          console.log("Doc: " + doc);
//      }
//
//     return (
//      <ScrollView>
//         <View style={{marginTop:50,alignSelf:'center'}}>
//         <Text style={{fontWeight:'bold',fontSize:25,alignSelf:'center',justifyContent:'center',marginBottom:15}}>Write To Us</Text>
//         <View style={{borderBottomWidth:2,marginBottom:20}}></View>
//         <View style={styles.inputbox}>
//             <Text style={{fontSize:18}}>Name</Text>
//             <TextInput placeholder="Name" value={name}
//             onChangeText={(text)=>setname(text)}/>
//         </View>
//         <View style={styles.inputbox}>
//             <Text style={{fontSize:18}}>WhatsApp Number</Text>
//             <TextInput placeholder="WhatsApp Number" value={number}
//             onChangeText={(text)=>setnumber(text)}/>
//         </View>
//         <View style={styles.inputbox}>
//             <Text style={{fontSize:18}}>Email</Text>
//             <TextInput placeholder=" Email" value={email}
//             onChangeText={(text)=>setemail(text)}/>
//         </View>
//         <View style={styles.inputbox}>
//             <Text style={{fontSize:18}}> Query</Text>
//             <TextInput placeholder="Query" value={message}
//             onChangeText={(text)=>setmessage(text)}/>
//         </View>
//         <TouchableOpacity onPress={pickDocument}>
//         <View style={styles.inputbox}>
//             <Text style={{fontSize:18}}> Upload Image</Text>
//             <TextInput label="Upload Image"  value={doc} />
//         </View>
//         </TouchableOpacity>
//             { docUrl !== '' &&
//           <Image style={{alignSelf:'center', width: 200, height: 200 }} source={{uri:docUrl}}/>}
//         <TouchableOpacity   style={styles.appButtonContainer} onPress={Submit}>
//           <Text style={styles.appButtonText}>Submit <ActivityIndicator size="small" color="#0000ff" animating={loading} /></Text>
//         </TouchableOpacity >
//         </View>
//         </ScrollView>
//     )
// }
//
// const styles = StyleSheet.create({
// inputbox:{
//      position:'relative',
//      backgroundColor:'#E8E8E8',
//      borderRadius: 16,
//      width:330,
//      height:'auto',
//      alignItems: 'flex-start',
//      paddingLeft:15,
//      paddingVertical:5,
//      margin:10,
//      marginTop:5,
//      marginLeft:15
//  },
//  appButtonContainer: {
//      marginTop:8,
//      backgroundColor: "#e91e63",
//      borderRadius: 20,
//      paddingVertical: 10,
//      paddingHorizontal: 12,
//      width:150,
//      marginLeft:100,
//      marginBottom:8
//    },
//    appButtonText: {
//      fontSize: 15,
//      color: "#fff",
//      fontWeight: "bold",
//      alignSelf: 'center',
//    },
// })
// export default Support;


export default Imagess;
