

import  React,{useState} from "react"
import {View,Text,StyleSheet,SafeAreaView,Image,TextInput,TouchableOpacity,ScrollView,Alert} from "react-native";
import axios from "axios";

const Register=props=>{
  const [username,setusername]=useState("");
  const [useremail,setuseremail]=useState("");
  const [usernum,setusernum]=useState("");
  const [userSPOCname,setSPOCname]=useState("");
  const [userSPOCemail,setSPOCemail]=useState("");
  const [userSPOCnum,setSPOCnum]=useState("");
  const [loading,setLoading]=useState(false);

  const submit=pros=>{
        
            console.log(username,useremail,usernum,userSPOCname,userSPOCemail,userSPOCnum)
             if(username=="" && useremail=="" && usernum =="" ) 
            //  && userSPOCname=="" && userSPOCemail=="" && userSPOCnum==""
            {
                alert("Please enter all the required fields ")
            }
            else if (username=="" ) 
            {
                alert("Please enter your name ");
            }
            else if (useremail=="" ) 
            {
                alert("Please enter your email id ");
            }
            else if (usernum=="" ) 
            {
                alert("Please enter your num ");
            }
            else
            {
                alert("Succesfully Submited");
                // props.navigation.push("Otp");
            }
    
            axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/partnerRegistrationFlow',{
              
              partnerRegisteredFrom:"OXYLOANS",
                partnerName:username,
                partnerEmail:useremail,
                partnermobileNumber:usernum,
                pocName:userSPOCname,
                listOfPoCEmail:userSPOCemail,
                listOfPoCMobileNumber:userSPOCnum   
    
            })
    
            .then(function (response) {
                console.log("Sreeja");
                alert("Username and Password will recieve to your registered email id.Please check and Login with the Credentials")
              setTimeout(function(){
                console.log("Sreeja1");
                  console.log(response.data);
                  props.navigation.push("Login");
              }, 3000);
    
            })
            .catch(function (error) {
              console.log(error);
              console.log(error.response.status);
            
              console.log(error.response.data.errorMessage);
              Alert.alert(
        "Warning",
        error.response.data.errorMessage,
        [
          { text: "OK", onPress: () => setLoading(false) }
        ]
      );
          
      }
      );
         
         }
    

return(
<View style={styles.container}>
         
         <View style={styles.img1}>
             <Image source={require('../assets/background.jpeg')} style={{height:260,width:'auto', position:'relative'}}></Image>
 
             <View style={styles.img2}>
                 <Image source={require('../assets/oxylogowhite.png')} style={{height:80,width:260,marginTop:20}}></Image>
             </View>
           </View>
           <View style={styles.backgda2}>
        <Image source={{uri:"https://media.istockphoto.com/photos/business-partnership-business-man-investor-handshake-with-effect-picture-id1313742092?b=1&k=20&m=1313742092&s=170667a&w=0&h=rDXsKPD722DEsxHYo1QEhM2UWV0nOfuD-izQHm2DxJ4="}} 
            style={styles.img} />
            <ScrollView>
            <Text style={styles.header}>Partner Registration</Text>
              
            <TextInput placeholder="Enter your name" style={styles.TextInput} 
                                                      onChangeText={(text)=>setusername(text)}/>

            <TextInput placeholder="Enter your Email" style={styles.TextInput}  
                                                      onChangeText={(text)=>setuseremail(text)}/>

            <TextInput placeholder="Enter your Mobile Number " style={styles.TextInput} 
                                                      onChangeText={(numeric)=>setusernum(numeric)}
                                                      keyboardType="number-pad" maxLength={10}/>

            <TextInput placeholder="Enter SPOC Name" style={styles.TextInput} 
                                                      onChangeText={(text)=>setSPOCname(text)}/>

            <TextInput placeholder="Enter SPOC Email" style={styles.TextInput} 
                                                      onChangeText={(text)=>setSPOCemail(text)}/>

            <TextInput placeholder="Enter your Mobile Number" style={styles.TextInput} 
                                                      onChangeText={(numeric)=>setSPOCnum(numeric)}    
                                                      keyboardType="number-pad" maxLength={10}/>

            <View style={styles.footer}>
                    <TouchableOpacity style={styles.btn} onPress={submit} >
                            <Text> <Text style={styles.txt4}/>  Register  </Text>
                    </TouchableOpacity>
            </View>



            </ScrollView>
           </View>


</View>

  
)
}

const styles = StyleSheet.create({
    
  container:{
      flex:1,
      // position:"relative"   
      },

  img1:{
      flex:1,
      // paddingBottom:20
     
  },
  img:{
    height:100,
    width:300,
    // margin:15,
    marginLeft:30,
    marginTop:20
},
  backgda2:{
      flex:3.3,
      backgroundColor:'white',
      borderTopStartRadius:30,
      borderTopEndRadius:20,
      // position:"absolute"
  },

  img2:{
      top:40,
      position:'absolute',
      margin:10,
  },
  header:{
    fontSize:23,
    fontStyle:"normal",
    alignSelf:"center",
    margin:20
},
TextInput:{
  borderColor:'grey',
  borderWidth:2,
  padding:10,
  borderRadius:10,
  marginVertical:10,
  marginHorizontal:10
},
btn:{
  // margin:2,
  padding:10,
  width:120,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:5,
  backgroundColor:"#4CAF50"
},
txt4:{
  alignContent:"center"
},
footer:{
  width: 200,
  marginLeft:100,
  margin:20,justifyContent:'center',flexDirection:'row',
  fontSize:20
  },
})

export default Register;








