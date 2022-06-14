import React,{useState} from 'react'
import { StyleSheet, Text, View,Button ,TextInput,FlatList,Modal} from 'react-native';
import axios from 'axios';
import {useSelector} from 'react-redux';


const BorrowerHome=({navigation}) =>{
 const userDetails = useSelector(state=>state.counter);
 var access = userDetails.headers.accesstoken;
 var id = userDetails.data.id;
 const [Count,setCount]=useState()

 const [Closed,setclosed]=useState()
 const[ClosedLoans,setclosedLoans]=useState()
 const[Amount,setAmount]=useState()
 const [Active,setActive]=useState()
 const[ActiveLoans,setActiveLoans]=useState()

 const [Disbursed,setDisbursed]=useState()
 const [DisbursedAmt,setDisbursedAmt]=useState()

 var prod='https://fintech.oxyloans.com/oxyloans/v1/user';
 var local='http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user';

axios({
   method:'get',
   url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/borrowerdashboard/BORROWER',
   headers:{
     accessToken: access,
   }
 })

 .then(function (response) {


   setCount(response.data.noOfApplications)
   setActive(response.data.noOfActiveApplications)
   setAmount(response.data.loanOfferedAmount)
   setActiveLoans(response.data.activeLoansAmount)
   setclosed(response.data.noOfClosedApplications)
   setclosedLoans(response.data.closedLoansAmount)
   setDisbursed(response.data.noOfDisbursedApplications)
   setDisbursedAmt(response.data.amountDisbursed)

 })
 .catch(function(error){
   console.log('error',error)
 });
 return (

   <View style={styles.container}>


      <View style={styles.container1}>

      <View style={{flexDirection:"row"}}>
      <View style={styles.box1}>
        <Text style={styles.txt1}>{Amount}</Text>
        <View style={{backgroundColor:'#008B8B',width:165,marginHorizontal:20,paddingVertical:10,bottom:-1,alignItems:'center'}}>
          <Text style={{color:'white'}}>No of applications : {Count} </Text>
        </View>
      </View>
      <View style={styles.box2}>
        {/* <Text style={styles.txt1}></Text> */}
        <Text style={styles.txt1}>{ActiveLoans}</Text>
        <View style={{backgroundColor:'#34A56F',width:165,marginHorizontal:20,paddingVertical:10,bottom:2,alignItems:'center'}}>
          <Text style={{color:'white'}}> No of Active Applications : {Active}</Text>
        </View>
      </View>
      </View>

      <View style={{flexDirection:"row"}}>
      <View style={styles.box3}>
        <Text style={styles.txt1}>{ClosedLoans}</Text>
        <View style={{backgroundColor:'#9F000F',width:165,marginHorizontal:20,paddingVertical:10,bottom:-1,alignItems:'center'}}>
             <Text style={{color:'white'}}>Closed Applications : {Closed}</Text>
        </View>
      </View>
      <View style={styles.box4}>
        <Text style={styles.txt}>INR :{DisbursedAmt}</Text>
        <View style={{backgroundColor:'#E66C2C',width:165,marginHorizontal:20,paddingVertical:10,bottom:-8,alignItems:'center'}}>
        <Text style={{color:'white'}}>No.of Disbursed Applications : {Disbursed}</Text>
        </View>
      </View>
      </View>
       </View>

     </View>
 );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:10,
  },

  container1: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:0,
    marginLeft:1
  },

  box1:{
    backgroundColor:'#40E0D0',
    width:165,
    height:130,
    margin:10,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
    display:'flex',

  },

  box2:{
    backgroundColor:'#50C878',
    width:165,
    height:130,
    margin:10,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
  },

  box3:{
    backgroundColor:'#F75D59',
    width:165,
    height:130,
    margin:10,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
  },

  box4:{
    backgroundColor:'#FF8C00',
    width:165,
    height:130,
    margin:10,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
  },

  txt1:{
    color:'white',
    fontSize:40,
    margin:2
  },
  txt2:{
    backgroundColor:'blue',
    color:'white',
    marginTop:5,
    paddingTop:5,
  },
  txt:{
    color:'white',
    fontSize:30,
    margin:2
  },
});
export default BorrowerHome;
