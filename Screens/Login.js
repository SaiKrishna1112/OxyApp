import axios from "axios";
import  React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Pressable,Alert} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import AnimatedLoader from "react-native-animated-loader";
import { AccessToken,UserID } from '../src/action/index';

const Login=props =>{

    const[pname,setpname]=useState("OXY_PSaiKr");
    // const[pname,setpname]=useState("");
    const[password,setpass]=useState("Test@123");
    // const[password,setpass]=useState("");

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
    const dispatch=useDispatch();



   // console.log(username,useremail,usernum,userSPOCname,userSPOCemail,userSPOCnum ,utmName);

   const submitfunction=pros=>{

    // console.log(username,useremail,usernum)

     setLoading(true);
    axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/login?grantType=PWD',{

            partnerUtmName:"OXY_PSaiKr",
            partnerPassword:"Test@123"
            // partnerUtmName:pname,
            // partnerPassword:password
    })
    .then(function (response) {
        dispatch(AccessToken(response));
        setTimeout(function(){
         setLoading(false);
     props.navigation.push("PartnerDrawer");
      }, 3000);
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


   const resetfunction=pros=>{

    // console.log(username,useremail,usernum)


    axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/login?grantType=PWD',{

            partnerUtmName:pname,
            partnerPassword:password
    })



    .then(function (response) {

        dispatch(AccessToken(response));
        setTimeout(function(){
     props.navigation.push("PartnerDrawer");

      }, 3000);
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

            <View style={styles.img2}>
                <Image source={require('../assets/oxylogowhite.png')} style={{height:80,width:260,marginTop:20}}></Image>
            </View>

          </View>
        <View style={styles.backgda2}>
        <Image source={require('../assets/aa.jpeg')}
            style={styles.img} />
            <Text style={styles.header}>Login as a Partner</Text>

             <TextInput placeholder="Enter Partner UTM Name" style={styles.input}
                                                   onChangeText={(text)=>setpname(text)}/>



<View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          name="password"
          placeholder="Partner Password"
          autoCapitalize="none"
        //   autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={passwordVisibility}
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setpass(text)}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      </View>

<TouchableOpacity onPress={{resetfunction}}>
  <Text style={{marginLeft:235,marginTop:8, color:"#728FCE"}}>Reset Password</Text>
  </TouchableOpacity>
       <AnimatedLoader
                visible={loading}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../assets/loading-state.json")}
                animationStyle={styles.lottie}
                speed={1}>
                <Text>Loading...</Text>
            </AnimatedLoader>



            <View style={styles.footer}>
                    <TouchableOpacity style={styles.btn} onPress={submitfunction}>
                            <Text >   Login  </Text>
                    </TouchableOpacity>

            </View>
            <TouchableOpacity  onPress={()=>{
                props.navigation.push("Register");
            }}>
            <Text style={styles.txt} >  Partner Registration  </Text>


            </TouchableOpacity>

    </View>

    </View>

    );
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
    backgda2:{
        flex:2.9,
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
    text1:{
        top:120,
        margin:8,
        padding:8,
        position:'absolute',
        color:'white',
        fontSize:20,
        width:240
   },
    text2:{
        top:190,
        margin:20,
        position:'absolute',
        color:'white',
        fontSize:15,
        width:350,
    },
    header:{
        fontSize:23,
        fontStyle:"normal",
        alignSelf:"center",
        margin:30
    },
    input:{
        borderColor:'grey',
        borderWidth:2,
        padding:5,
        borderRadius:10,
        marginVertical:10,
        marginHorizontal:10,

      },
      img:{
        width:220,
        height:120,
        alignSelf:"center",
        marginTop:20
      },


      btn:{
                // margin:2,
                padding:10,
                width:150,
                justifyContent:"center",
                alignItems:"center",
                alignSelf:"center",
                borderRadius:5,
                backgroundColor:"#4CAF50",
              marginTop:20
                },
      txt1:{
          alignSelf:"center",
          color:"white"
      },
      txt:{
            color:"#728FCE",
            alignSelf:"center",
            marginTop:10
            },
            inputContainer: {
                backgroundColor: 'white',
                width: '95%',
                marginLeft:10,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: 'grey'
              },
              inputField: {
                padding: 5,
                // fontSize: 22,
                width: '90%',
              },
              lottie: {
                width: 120,
                height: 120
              },


});

export default Login;
