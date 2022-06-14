import { Animated,StyleSheet,TextInput, Text, View,Image,TouchableOpacity,SafeAreaView,Modal} from 'react-native';
import axios from 'axios';
import React,{useState} from 'react';

const BorrowerRegister=props=> {

    const [name , setname]=useState("");
    const [email , setemail]=useState("");
    const [password , setpassword]=useState("");
    const [mobile, setmobile]=useState("");
    const [otpsession , setotpsession]=useState("");
    const [modal1,setmodel1]=useState(true);
    const [modal2,setmodel2]=useState(false);
    const [modal3,setmodel3]=useState(false);
    const [modal4,setmodel4]=useState(false);

    const [dob , setdob]=useState("");
    const [pan , setpan]=useState("");
    const [adresssec , setadresssec]=useState("");
    const [otp, setotp]=useState("");
    const [emailID, setEmailId]=useState("");

   

    const hitapisOtp=pros=>{

        console.log(name,email,password,mobile);
        axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/newUserRegistration', {
            mobileNumber: mobile,
            citizenship: "NONNRI"
          }).then(function (response) {
            setmodel1(false);
            setmodel2(true);
            setotpsession(response.data.mobileOtpSession);

            console.log(response.data);
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

        const setotpval=prod=>{
        axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/newUserRegistration',{
            mobileNumber : mobile,
			mobileOtpSession : otpsession,
			mobileOtpValue : otp,
			primaryType : 'BORROWER',
			name :name ,
			email : email,
			password : password,
			citizenship : "NONNRI",
			uniqueNumber : "0",
			utm:"WEB"
        }).then(function(response){
            setmodel1(false);
            setmodel2(false);
            setmodel3(true);
            setEmailId(response.data.userId);

            console.log(response.data);
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
    const finalStepregistration=pros=>{

        console.log(name,email,password,mobile,otp,otpsession,emailID,adresssec,pan,dob);

        axios.patch('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/emailVerification', {
            
            address: adresssec,
            dob: dob,
            panNumber: pan,
            userId: emailID,
          })
          .then(function (response) {
              setmodel1(false);
              setmodel2(false);
              setmodel3(false);
              setmodel4(true);
      
             

            console.log(response.data);
            
        

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
  return (

<View>

<Modal animationType="slide"
        visible={modal1}>
    <View style={{position:'relative',justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../Images/bgm.jpg')} style={{height:1000}}></Image>
               
                <Image source={require('../Images/oxylogowhite.png')} style={styles.img}></Image>
        <View style={{backgroundColor:'white',padding:10,position:'absolute',justifyContent:'center',}}>
            
            <View style={{alignItems:'center',padding:10,}}>
                <Text style={{fontSize:25}}>Register as Borrower</Text>
            </View >

            <View style={{padding:10}}>

                   <TextInput placeholder="NAME AS PER PANCARD" style={styles.input} onChangeText={userval1=>setname(userval1)}/>
                   <TextInput placeholder="EMAIL" style={styles.input} onChangeText={userval2=>setemail(userval2)}/>
                   <TextInput placeholder="PASSWORD" style={styles.input} onChangeText={userval3=>setpassword(userval3)}/>
                   <TextInput placeholder="MOBILE NUMBER" style={styles.input} onChangeText={userval4=>setmobile(userval4)}/>

                    <TouchableOpacity style={{backgroundColor:'#25d366',alignItems:'center',marginTop:30}} onPress={hitapisOtp}>
                         <Text style={{fontSize:20,padding:5}}>Sign Up</Text>
                    </TouchableOpacity>
            </View>

        </View>

   </View>
   </Modal>

   {/* modal2 otp verfication */}

   <Modal animationType="fade"
        visible={modal2}>
    <View style={{position:'relative',justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../Images/bgm.jpg')} style={{height:1000,}}></Image>
               
                <Image source={require('../Images/oxylogowhite.png')} style={styles.img}></Image>
        <View style={{backgroundColor:'white',padding:10,position:'absolute',justifyContent:'center',}}>
            
            <View style={{alignItems:'center',padding:10,}}>
                <Text style={{fontSize:25}}>OTP VERIFICATION</Text>
            </View >

            <View style={{padding:10}}>
            <TextInput placeholder="Enter your OTP" style={styles.input} onChangeText={userval5=>setotp(userval5)}/>
            <TouchableOpacity style={{backgroundColor:'#25d366',alignItems:'center',marginTop:20}} onPress={setotpval}>
                         <Text style={{fontSize:20,padding:5}}>Sign Up</Text>
            </TouchableOpacity>
            
            </View>
            </View>

        </View>
        </Modal>

        {/* modal3 finalstep registartion*/}

        <Modal animationType="fade"
        visible={modal3}>
    <View style={{position:'relative',justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../Images/bgm.jpg')} style={{height:1000,}}></Image>
               
                <Image source={require('../Images/oxylogowhite.png')} style={styles.img}></Image>
        <View style={{backgroundColor:'white',padding:10,position:'absolute',justifyContent:'center',}}>
            
            <View style={{alignItems:'center',padding:10,}}>
                <Text style={{fontSize:25}}>Enter your details</Text>
            </View >

            <View style={{padding:10}}>
            <TextInput placeholder='enter YOUR DOB' style={styles.TextInput} onChangeText={userval6=>setdob(userval6)} ></TextInput>
            <TextInput placeholder='enter your PAN' style={styles.TextInput} onChangeText={userval7=>setpan(userval7)} ></TextInput>
            <TextInput placeholder='enter your ADDRESS' style={styles.TextInput} onChangeText={userval8=>setadresssec(userval8)} ></TextInput>
            <TouchableOpacity style={{backgroundColor:'#25d366',alignItems:'center',marginTop:20}} onPress={finalStepregistration}>
                         <Text style={{fontSize:20,padding:5}}>submit</Text>
            </TouchableOpacity>
            
            </View>
            </View>

        </View>
        </Modal>

       {/* modal4 sucessfull*/} 
  
       <Modal animationType="fade"
        visible={modal4}>
       <View style={{position:'relative',justifyContent:'center',alignItems:'center',}}>
                <Image source={require('../Images/bgm.jpg')} style={{height:1000,}}></Image>
               
                
                <Image source={require('../Images/registered.png')} style={styles.img2}></Image>
                
        <View style={{backgroundColor:'white',padding:10,position:'absolute',justifyContent:'center',}}>
            
        

            <View style={{padding:10}}>
            <Text>You have sucessfully regitered</Text>
            
            </View>
            </View>

        </View>
        </Modal>


</View>
);
}


const styles = StyleSheet.create({
input:{
    paddingVertical:10,
    paddingHorizontal:5,
    marginVertical:10,
    backgroundColor:'#F0F0F0',
    fontSize:15,
    width:260,
    borderColor:'#A8A8A8',
    borderWidth:0.5,
},
img:{
    height:85,
    width:270,
    top:170,
    position:'absolute',
    
},
img2:{
    height:260,
    width:270,
    top:150,
    position:'absolute',
}


});

export default BorrowerRegister;