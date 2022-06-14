import  React from "react"
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {useSelector} from "react-redux";
import axios from "axios";

const HomeScreen=pros=>{
    const count =useSelector(state=>state.counter);
    // console.log(count);

const invitefunction=props=>{
    axios.get('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/59/mailContentShowingToPartner',
    {headers:{
        accessToken: count.headers.accesstoken,
    }})
    .then(function (response) {

      setTimeout(function(){

          console.log(response.data);
          pros.navigation.push("Inviting");
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

        <View style={{flex:1}}>
        <ScrollView>

        <View style={styles.con1}>
        <Text style={styles.txt}> Verification</Text>
        <View style={styles.con2}>
        <View style={styles.con3}>
            <TouchableOpacity onPress={()=>{
              pros.navigation.push("NumberVerify");
            }}>
            <Icon style={{marginLeft:40,marginTop:10}} name="phone-portrait" color="#7D0552" size={35}/>
            <Text style={styles.con3}>Mobile Number </Text>
            <Text style={{marginLeft:25}}>Verification </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.con3}>
            <TouchableOpacity onPress={()=>{
              pros.navigation.push("BankVerify");
            }}>
            <MaterialCommunityIcons  style={{marginLeft:39,marginTop:9}} name="bank" color={"#757575"} size={35}/>
            <Text style={{marginLeft:40}}>Bank </Text>
            <Text style={{marginLeft:25}}>Verification </Text>
            </TouchableOpacity>
            </View>


        </View>
        </View>

        <View style={styles.con1}>

            <Text style={styles.txt}> Partner Dashboard </Text>
        <View style={styles.con2}>
            <View style={styles.con3}>
            <TouchableOpacity>
            <Icon style={styles.icon} name="home" color="#3A9BDC" size={35}/>
            <Text style={styles.con3}>Registered </Text>
            <Text style={styles.con3}>Borrowers </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.con3}>
            <TouchableOpacity onPress={()=>{
              pros.navigation.push("Generating");
            }}>
            <Icon style={{marginLeft:30,marginTop:10}} name="home" color="#FFC300" size={35}/>
            <Text style={{marginLeft:18}}>Registered </Text>
            <Text style={{marginLeft:25}}>Lenders </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.con3}>
            <TouchableOpacity onPress={()=>{
              pros.navigation.push("ReferralStatus");
            }}>
            <Icon style={{marginLeft:39,marginTop:10}} name="stats-chart" color="#FF5733" size={35}/>
            <Text style={{marginLeft:30}}>Referral </Text>
            <Text style={{marginLeft:35  }}>Status </Text>
            </TouchableOpacity>
            </View>

        </View>
        </View>

        <View style={styles.con1}>

       <Text style={styles.txt}> My Network </Text>
   <View style={styles.con2}>
       <View style={styles.con3}>
       {/* <TouchableOpacity onPress={()=>{
              pros.navigation.push("Inviting");
            }}> */}
       {/* <Icon style={styles.icon1} name="person-add" color="#4F8EF7" size={35}/> */}
<TouchableOpacity onPress={invitefunction}>
       <Icon style={styles.icon} name="person" color="#900C3F" size={35}/>
       <Text style={{marginLeft:23}}>Invite</Text>
       {/* <Text style={styles.con3}>Borrowers </Text> */}
       </TouchableOpacity>
       </View>

       <View style={styles.con3}>
       <TouchableOpacity>
       <Icon style={{marginLeft:30,marginTop:9}} name="people" color="#228B22" size={37}/>

       {/* <Icon style={styles.icon2} name="people" color="#4F8EF7" size={37}/> */}
       <Text style={{marginLeft:17}}>Bulk Invite</Text>
       </TouchableOpacity>
       </View>

       <View style={styles.con3}>
       <TouchableOpacity onPress={()=>{
         pros.navigation.push("NeoBank");
       }}>
       {/* <Icon style={styles.icon2} name="account_balance" color="#4F8EF7" size={35}/> */}
       {/* <MaterialCommunityIcons  style={styles.icon3} name="bank" color={"blue"} size={35}/> */}

   <MaterialCommunityIcons  style={{marginLeft:27,marginTop:9}} name="bank" color={"#581845"} size={35}/>
       <Text style={{marginLeft:23}}>Set-Up </Text>
       <Text style={{marginLeft:18}}>Neo Bank </Text>
       </TouchableOpacity>
       </View>

   </View>
   </View>
        </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    txt:{
        fontSize:15,
        marginLeft:10,
        fontWeight:"bold",
        marginTop:10
    },
    con1:{

        justifyContent:"flex-start",
        // alignItems:"center",
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginTop:10,
        marginLeft:20,
        marginRight:20

        // width:300,

    },
    inputbox:{
        position:'relative',
        backgroundColor:'#E8E8E8',
        borderRadius: 16,
        width:250,
        height:'auto',
        alignItems: 'flex-start',
        paddingLeft:20,
        paddingVertical:5,
        // marginTop:20,
        marginBottom:5,
        marginTop:10,
        marginLeft:15
    },
    con2:{
        flexDirection:"row",
        justifyContent:"flex-start",
        margin:8,
        margin:10,
        marginBottom:20

    },
    con3:{
        marginLeft:10,


    },

    icon:{
        marginLeft:20,
        marginTop:10,

    },



})
export default HomeScreen;
