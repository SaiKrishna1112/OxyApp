import  React,{useState,useRef} from "react"
import {View,Text,StyleSheet,SafeAreaView,Image,TextInput,Button,TouchableOpacity,ScrollView,Modal,Alert} from "react-native";
import axios from "axios";
// import EncryptedStorage  from 'react-native-encrypted-storage';
import {useSelector} from "react-redux";


const NumberVerify  = props =>{
  const count =useSelector(state=>state.counter);
console.log("====================================");
// console.log(count);
  const[number,setNumber]=useState("");
  const[email,setEmail]=useState("");
  const[otp,setotp]=useState("");
  const[eotp,seteotp]=useState("");
  const[otpSession,setotpSession]=useState("");
  const[Modal1,setModal1]=useState(true);
  const[Modal2,setModal2]=useState(true);
  const[Modal3,setModal3]=useState(true);
  const[Modal4,setModal4]=useState(true);

  const hitotp=props=>{
   const accesstoken = count.data.accesstoken;
   const name = count.data.partnerUtmName;

   console.log(name,number);
    axios.patch('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/verifyingMobileAndEmailForPartner', {

            utmName:name,
            partnerMobileNumber:number,

      },{ headers:{
        accessToken: count.headers.accesstoken,

      }})
      .then(function (response) {

          console.log("Sreeja");
        console.log(response.data);
        setotpSession(response.data.mobileOtpSession)


      })
      .catch(function (error) {
        console.log(error);
        console.log('Error', error.message);
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
      });
}

console.log(count.data.partnerUtmName,number,otpSession,otp);
const verifyotp=props=>{

  axios.patch('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/verifyingMobileAndEmailForPartner', {

      utmName:count.data.partnerUtmName,
      partnerMobileNumber:number,
      mobileOtpSession: otpSession,
      mobileOtpValue:otp



    },{ headers:{
      accessToken: count.headers.accesstoken,

    }})
    .then(function (response) {

      console.log(response.data);
          Alert.alert("Successfully Verified your Mobile Number");

    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response.data.errorMessage);
      Alert.alert(
"Warring",
error.response.data.errorMessage,
[
  { text: "OK"}
]
);

}
);

 }


 const emailotp=props=>{

 const accesstoken = count.data.accesstoken;
 const name = count.data.partnerUtmName;

 console.log(name,number,email);
  axios.patch('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/verifyingMobileAndEmailForPartner',

    {
      utmName:name,
      partnerMobileNumber:number,
      partnerEmail:email

  }

    ,{ headers:{
      accessToken: count.headers.accesstoken,

    }})
    .then(function (response) {



    })
    .catch(function (error) {
      console.log(error);
      console.log('Error', error.message);
      if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
    });
}


console.log(count.data.partnerUtmName,number,email,eotp);
const emailverify=props=>{

  axios.patch('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/verifyingMobileAndEmailForPartner', {

      utmName:count.data.partnerUtmName,
      partnerMobileNumber:number,
      partnerEmail:email,
      emailOtpValue:eotp
    },{ headers:{
      accessToken: count.headers.accesstoken,

    }})
    .then(function (response) {
      console.log("Sreeja");
      console.log(response.data);
          Alert.alert("Successfully Verified your Email_Id");
              //  setModal1(false);
              //  setModal2(true);
              //  setModal3(false);
              //  setModal4(true);
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response.data.errorMessage);
      Alert.alert(
"Warring",
error.response.data.errorMessage,
[
  { text: "OK"}
]
);

}
);

 }




      return(

<View style={styles.container}>
<ScrollView>
<View style={styles.img7}>
          <Image source={require('../assets/background.jpeg')} style={{height:150,width:'auto', position:'relative'}} />
          <View>
          <Modal animationType="slide"
        visible={Modal1}>
         <View style={styles.backgd2}>

         <View style={styles.secimg1}>

            <Image source={require('../assets/avatar2.png')} style={{ height:120,width:120,}}/>
        </View>

         <View style={{marginTop:150,paddingLeft:12}}>
         <Text style={styles.headers1}>Verify Your Mobile Number</Text>


         <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:15}}>
             <View>
            <TextInput style={styles.textinput} placeholder="Enter your Mobile Number" maxLength={10}
                                                  onChangeText={(numeric)=>setNumber(numeric)} keyboardType="number-pad"/>
                                                  </View>
            <TouchableOpacity style={styles.btn} onPress={hitotp}>
            {/* <TouchableOpacity style={styles.btn}> */}

                   <Text style={styles.BtnText}>Send OTP</Text>
               </TouchableOpacity>
         </View>
         <View>
         <TextInput style={styles.input} placeholder="Enter OTP" maxLength={6}
                                onChangeText={(numeric)=>setotp(numeric)} keyboardType="number-pad"/>
           </View>

               </View>


               <TouchableOpacity style={styles.appButtonContainer} onPress={verifyotp} >

                   <Text style={styles.appButtonText}>Verify</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.appButtonContainer} onPress={()=>{
              props.navigation.push("PartnerDrawer");
            }}>

                   <Text style={styles.appButtonText} >Back</Text>
               </TouchableOpacity>

               </View>

</Modal>
</View>


<View>
<Modal animationType="slide"
        visible={Modal3}>
         <View style={styles.backgd2}>

         <View style={styles.secimg1}>

         <Image source={require('../assets/emaillogo.jpg')} style={{ height:120,width:120,}}/>
        </View>

         <View style={{marginTop:150,paddingLeft:12}}>
         <Text style={styles.headers1}>Verify Your Email</Text>

         <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:15}}>
             <View>
            <TextInput style={styles.textinput} placeholder="Enter your Email"
                                                  onChangeText={(text)=>setEmail(text)}/>
                                                  </View>

            <TouchableOpacity style={styles.btn}>

                    <Text style={styles.BtnText} onPress={emailotp}>Send OTP</Text>
               </TouchableOpacity>
         </View>
         <View>
         <TextInput style={styles.input} placeholder="Enter OTP" maxLength={6}
                                                  onChangeText={(numeric)=>seteotp(numeric)} keyboardType="number-pad"/>
           </View>

               </View>


               <TouchableOpacity style={styles.appButtonContainer} onPress={emailverify}>

                   <Text style={styles.appButtonText}>Verify</Text>
               </TouchableOpacity>

                <TouchableOpacity style={styles.appButtonContainer} onPress={()=>{
              props.navigation.push("PartnerDrawer");  }}>
                      <Text style={styles.appButtonText} >Back</Text>
                </TouchableOpacity>

               </View>
</Modal>
</View>


<View>
<Modal animationType="slide"
        visible={Modal4}>
         <View style={styles.backgd2}>

         <View style={styles.secimg1}>

         <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWY_TYqVxz5A5gxqNBWwN2s_fsmSDgU6vjQ&usqp=CAU"}}
            style={styles.img1} />
        </View>

         <View style={{}}>
         <Text style={styles.headers1}>Verification Success</Text>
        <Text>Thank You for your Support.We have Successfully Verified Your Email_ID and Mobile Number </Text>
               </View>


               <TouchableOpacity style={styles.appButtonContainer} onPress={()=>{
                   props.navigation.push("PartnerDrawer");
                   }}>

                   <Text style={styles.appButtonText}>Back</Text>
               </TouchableOpacity>

               </View>

</Modal>
</View>

</View>
</ScrollView>
</View>

         )
        }

const styles=StyleSheet.create({
otpBoxesContainer: {
    flexDirection: 'row'
},
otpBox: {
    padding: 11,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#000000',
    height: 45,
    width: 45,
    textAlign: 'center'
},
appButtonContainer: {
    marginTop:10,
    backgroundColor: "#569F40",
    borderRadius: 5,
    paddingVertical: 8,
    // paddingHorizontal: 5,
    width:180,
    alignSelf:"center",
    marginBottom:20,
// borderBottomLeftRadius:20,
// borderBottomRightRadius:20

  },
  appButtonText: {
    fontSize: 19,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",

  },
  container:{
      flex:1,
  },

  img7:{
      flex:2,
 },

  secimg:{
      top:40,
      position:'absolute',
      margin:10,
 },
 secimg1:{
     alignSelf:'center',
},
 backgd2:{
     alignSelf:'center',
     justifyContent:'center',
     marginTop:20,
     backgroundColor:'white',
     flex:1,
     marginLeft:2,

 },
 backgd3:{
  backgroundColor:'white',
  flex:17,
  borderTopStartRadius:20,
  borderTopEndRadius:20,
  marginLeft:2,
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
  marginTop:30
 },
 headers1:{
//   marginLeft:50,
   alignSelf:"center",
  fontSize:20,
  fontWeight:'bold',
  marginBottom:15
 },
 inputview:{
    flexDirection:"row",

 },
 input:{
 borderColor:'grey',
 borderWidth:1,
 padding:5,
 borderRadius:5,
 marginVertical:10,
 marginHorizontal:10,
 width:320,
textAlign:"center"
 },
 textinput:{
  shadowColor: 'black',
  shadowOpacity: 0.26,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 8,
  elevation: 5,
  borderRadius: 5,
  backgroundColor: 'white',
  padding:7,
  width:220,
  justifyContent:"flex-start",
  marginLeft:2
 },
 btn:{

  backgroundColor: "#569F40",
  borderRadius: 5,

  width:90,


 },
 BtnText:{
  fontSize: 15,
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center",
  padding:10
 },
 img:{
    height:100,
    width:100,
    padding:10,
    margin:20

 },
 img1:{
    height:100,
    width:100,
    padding:10,
    margin:20

 }
})
export default NumberVerify;
