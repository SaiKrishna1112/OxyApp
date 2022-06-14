import  React,{useState} from "react";
import { StyleSheet, Text, View,Image,Button,TouchableOpacity,TextInput,Alert,ScrollView} from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

const Details = para => {
  return (
     <View style={{backgroundColor:'white',height:1000}}>
       <View style={styles.container}>
       <ScrollView>
        <View style={styles.maintext}>
             <Text style={styles.text2}>OxyLoans.com offers free movie tickets for SARKARU VAARI PAATA</Text>
             <Text style={styles.text2}>OxyLoans.com is RBI approved peer 2 peer lending platform.You can register as Lender or Borrower.</Text>
             <Text style={styles.text2}>A Lender can invest/lend money and earn 18-36% assured yearly returns. i.e. Monthly 1.5 - 3%. Higher the risk, higher the reward.</Text>
             <Text style={styles.text2}>A Borrower can borrow money from INR 5,000 to 10,00,000.</Text>
             <Text style={{fontSize:18}}>Credit Score: </Text>
          <View style={styles.cibil}>
             <Text style={styles.text3}>900-800:--5 Tickets</Text>
             <Text style={styles.text3}>800-700:--4 Tickets</Text>
             <Text style={styles.text3}>700-600:--3 Tickets</Text>
             <Text style={styles.text3}>600-500:--2 Tickets</Text>
             <Text style={styles.text3}>500-400:--1 Tickets</Text>
          </View>
        </View>
          <Text style={{paddingLeft:20,fontSize:17,marginTop:20,fontWeight:'bold',color:'white'}}>Already a User in Oxyloans  </Text>
          <TouchableOpacity onPress={()=>{
            para.navigation.push('Login1');}}  style={styles.appButtonContainer}>
           <Text style={styles.appButtonText}>Let's login</Text>
          </TouchableOpacity>
          <Text style={{paddingLeft:20,fontSize:17,fontWeight:'bold',color:'white',marginTop:10}}>Not a User in Oxyloans </Text>
           <TouchableOpacity  onPress={()=>{
             para.navigation.push('Registation');}} style={styles.appButtonContainer}>
             <Text style={styles.appButtonText}>Let's Register</Text>
           </TouchableOpacity >
        </ScrollView>
      </View>
    </View>
)
}

const styles = StyleSheet.create({
 container:{
  marginTop:60,
  marginLeft:20,
 },
 text2:{
      marginTop:10,
      color:'black',
      fontSize:17,
      width:350,
  },
  text3:{
   fontSize:16,
   color:'white'
  },
    appButtonContainer: {
        marginTop:10,
        backgroundColor: "#569F40",
        borderRadius: 17,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width:330,
        marginLeft:12
      },
      appButtonText: {
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
      },
      cibil:{
       marginTop:10,
       alignSelf:'center',
       justifyContent:'center',
       borderRadius:30,
       borderWidth:3,
       backgroundColor:'#569F40',
       paddingHorizontal:30,
       height:150,
       borderColor:'#f2b900',
      },
 });
export default Details;
