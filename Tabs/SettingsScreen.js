import React, { useState } from 'react';

import ExpandableView from '@pietile-native-kit/expandable-view';
import { Text, TouchableHighlight, View , StyleSheet ,TextInput,TouchableOpacity,Pressable,Alert,Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useSelector} from "react-redux";

import axios from 'axios';

const SettingsScreen=props => {
  const count =useSelector(state=>state.counter);
  console.log("=====================================");
  // console.log(count);


    const[password,setpass]=useState();
    const[name,setname]=useState(count.data.partnerUtmName);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

    const useTogglePasswordVisibility = () => {
        const [passwordVisibility, setPasswordVisibility] = useState(true);
        const [rightIcon, setRightIcon] = useState('eye-off');
        
        const handlePasswordVisibility = () => {
          if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
          } else if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
          }
        };
      
        return {
          passwordVisibility,
          rightIcon,
          handlePasswordVisibility
        };
      };
      const { passwordVisibility, rightIcon, handlePasswordVisibility } =
      useTogglePasswordVisibility();
    
  
  console.log("sreeja");

  console.log(count.data.partnerUtmName);
 

  // console.log(setAutoUtm);
  
  function onPress(){
    setShow(!show);
}

  const submitfunction=props=>{
      console.log("Sreeja1");
 
      // console.log(accesstoken);
      setShow(!show);

  axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/resetpasswordForPartners',{
      
        
    partnerUtmName:name,
    partnerPassword:password

    },{
        
        headers:{
        accessToken: count.headers.accesstoken,

    }})
    .then(function (response) {
      console.log(response.data);
        setTimeout(function(){
          console.log(response.data);
          console.log(response.headers);
         
            Alert.alert("Successfully Completed");
        }, 1000);

      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.status);
      
        console.log(error.response.data.errorMessage);
        Alert.alert(
  "Warring",
  error.response.data.errorMessage,
  [
    { text: "OK", onPress: () => setLoading(false) }
  ]
);
    
}
);
  }
   

  return (
    <View style={styles.container}>
         
    <View style={styles.img1}>
        <Image source={require('../assets/background.jpeg')} style={{height:260,width:'auto', position:'relative'}}></Image>

        
      </View>
      <View style={styles.backgda2}>
<ScrollView>

<View style={styles.secview}> 
                                                
       <Text style={{fontSize:15,fontWeight:"bold"}}>Utm Name : {count.data.partnerUtmName}  </Text>
       <Text style={{fontSize:15,fontWeight:"bold"}}>Email : {count.data.partnerEmail} </Text>
       <Text style={{fontSize:15,fontWeight:"bold"}}>Number : {count.data.partnerMobileNumber}</Text>
              {/* <TextInput  placeholder="Enter UTM Name" onChangeText={(text)=>setname(text)} /> */}
             
    </View>

    <View>

<TouchableOpacity >
  <Text style={styles.text}> <Icon name="create" color="#4F8EF7" size={20}/> Write to us</Text>
</TouchableOpacity>

</View>

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>  <Icon name="chevron-down" color="#4F8EF7" size={22} /> Reset Password  </Text>

   
      </TouchableOpacity>
      
      <ExpandableView show={show}>
      <View style={styles.resetview}>
    
                <View style={styles.inputbox}> 
                                                
                <Text style={{fontSize:18,fontWeight:"bold"}}>Utm Name : </Text>
                {/* <TextInput  placeholder="Enter UTM Name" onChangeText={(text)=>setname(text)} /> */}
                <TextInput   onChangeText={(text)=>setname(text)} value={name}/>

                </View>
                                                    
            <View style={styles.inputbox}>
               

                <Text style={{fontSize:18,fontWeight:"bold"}}>Password : </Text>
                <View style={styles.iconview}>
                <TextInput style={styles.iconfield}
                placeholder="Enter the new Password" 
             
                 autoCapitalize="none"
         
                 textContentType="newPassword"
                 secureTextEntry={passwordVisibility}
                 value={password}
                 enablesReturnKeyAutomatically
                 onChangeText={text => setpass(text)}
               />
             
               <Pressable onPress={handlePasswordVisibility}>
                 <MaterialCommunityIcons name={rightIcon} size={20} color="#232323" />
               </Pressable>
               </View>
                </View>

                <TouchableOpacity style={styles.btn} onPress={submitfunction} >
                    <Text style={styles.txt1}> Submit </Text>
                </TouchableOpacity>
                </View>
      </ExpandableView>
    
 <View>

      {/* <TouchableHighlight onPress={()=>{
       props.navigation.push("Login");
     }}> */}
     <TouchableOpacity onPress={()=>{
              props.navigation.push("Login");
            }}>
        <Text style={styles.text}> <Icon name="log-out" color="#4F8EF7" size={20}/> SignOut</Text>
      </TouchableOpacity>

      </View>
      
      </ScrollView>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{flex:1}, 
   img1:{
        flex:1,
        // paddingBottom:20
       
    },

  // ion:{
  //   paddingLeft:"60%",
  //   size:"30px"
  // },
  backgda2:{
    flex:7.5,
    backgroundColor:'white',
    borderTopStartRadius:30,
    borderTopEndRadius:20,
    // position:"absolute"
},
secview:{
marginLeft:30,
marginTop:30,
padding:20
},
  input:{

    position:'relative',
    backgroundColor:'#E8E8E8',
    borderRadius: 5,
    width:290,
    height:'auto',
    alignItems: 'flex-start',
    paddingLeft:20,
    paddingVertical:5,
    marginTop:20,
    margin:7,
    marginLeft:40
  },
  resetview:{
    elevation: 5,
    borderRadius: 5,
    backgroundColor: 'white',
       padding: 10,
      marginLeft:15,
      marginRight:15,
      // marginTop:5

  },
  text:
  { 
      padding: 10,
      marginLeft:10,
      marginRight:10,
      elevation: 5,
      borderRadius: 5,
      backgroundColor: 'white',
      margin:5,
      fontSize:15,
      fontWeight:"bold"

  },
  btn:{
    padding:10,
    width:150,
    // justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:5,
    backgroundColor:"#989898",
    marginTop:20,
    // margin:100
},
txt1:{
    color:"#000000",
    // fontSize:20
    fontWeight:"bold"
},
inputbox:{
    position:'relative',
    backgroundColor:'#E8E8E8',
    borderRadius: 16,
    width:290,
    height:'auto',
    alignItems: 'flex-start',
    paddingLeft:20,
    paddingVertical:5,
    marginTop:20,
    margin:7
},
iconview: {
    backgroundColor: '#E8E8E8',
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d7d7d7',
  },
  iconfield: {
    padding: 5,
    fontSize: 16,
    width: '90%',
    height:30
  }
})

export default SettingsScreen;
