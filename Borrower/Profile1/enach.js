import React,{useState,useEffect} from "react";
import { View,Text ,StyleSheet,FlatList,TextInput,ScrollView,TouchableOpacity,Alert} from "react-native";
import axios from "axios";
import {useSelector} from 'react-redux';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AnimatedLoader from "react-native-animated-loader";


const Enach=({navigation})=>{
  const userDetails = useSelector(state=>state.counter);
  const userDetail = useSelector(state=>state.logged);
  var access = userDetails.headers.accesstoken;
  var id = userDetails.data.id;
  const [loading,setLoading]=useState(false);
  const [results,setresults]=useState([]);


var data  = {
        leftOperand:{
            fieldName:"borrowerUserId",
            fieldValue:id,
            operator:"EQUALS"
           },
           logicalOperator:"AND",
           rightOperand:{
              leftOperand:{
                fieldName:"borrowerEsignId",
                operator:"NOT_NULL"
               },
              logicalOperator:"AND",
                rightOperand:{
                   fieldName:"loanStatus",
                   fieldValue:"Active",
                   operator:"EQUALS"
                  }},
              page:{
                pageNo:1,
                pageSize:10
               },
               sortBy:"loanId",
               sortOrder:"DESC"
           }


  const postFunction=()=>{
   axios({
      method:'post',
      url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/loan/BORROWER/searchEnachMandate',
      data:data,
      headers:{
            accessToken:access,
           }
     })
     .then(function (response) {
      console.log(response.data)
      setresults(response.data.results)
      setTimeout(function(){
       setLoading(false)
              })
             })
      .catch(function (error) {
       console.log('error',error);
       Alert.alert(
  "Warring",
  error.response.data.errorMessage,
  [
   { text: "OK", onPress: () => setLoading(false) }
  ]
 );
     });
  }

  const renderList = ({item})=>{
   return (
    <View>
           <View style={styles.renderview}>
                   <View style={styles.insideview}>
                      <Text style={styles.txt5}>Lender Name	</Text>
                      <Text style={{color:"black",fontSize:16,paddingLeft:100}}>{item.loanRequestAmount}</Text>

                   </View>

                   <View style={styles.insideview}>
                     <Text style={styles.txt5}>	Loan ID</Text>
                     <Text style={{color:"black",fontSize:16,paddingLeft:120}}>{item.loanRequest}</Text>


                   </View>

                   <View style={styles.insideview}>
                     <Text style={styles.txt5}>Loan Amount  </Text>
                     <Text style={{color:"black",fontSize:16,paddingLeft:225}}>{item.rateOfInterest}</Text>

                   </View>

                   <View style={styles.insideview}>
                     <Text style={styles.txt3}>Rate of Interest  </Text>
                     <Text style={{color:"black",fontSize:16,paddingLeft:110}}>{item.rateOfInterest}</Text>
                   </View>


                   <View style={styles.insideview}>
                     <Text style={styles.txt3}>Interest Amount  </Text>
                     <Text style={{color:"black",fontSize:16,paddingLeft:80}}> {item.loanRequestedDate}</Text>
                   </View>

                   <View style={styles.insideview}>
                     <Text style={styles.txt3}>Tenure </Text>
                     <Text style={{color:"black",fontSize:16,paddingLeft:120}}>{item.loanPurpose}</Text>
                   </View>

                   <View style={styles.insideview}>
                     <Text style={styles.txt3}>Status </Text>
                     <Text style={{color:"black",fontSize:16,paddingLeft:135}}>{item.loanStatus}</Text>
                   </View>

                   <View style={styles.insideview}>
                     <Text style={styles.txt3}>Is ECS Activated </Text>
                     <Text style={{color:"black",fontSize:16,paddingLeft:135}}>{item.loanStatus}</Text>
                   </View>

                   </View>
            </View>
      )
     };

  return(
      <View style={{flex:9,marginTop:20}}>
      <View style={{flexDirection:'row',marginTop:30}}>
      <TouchableOpacity onPress={()=>navigation.navigate('BorrowerDrawer')} style={{alignSelf:'flex-start'}}>
      <MaterialCommunityIcons style={{marginLeft:15,alignSelf:'center'}} name = "arrow-left-thick" color = 'black' size = { 35 }/>
      </TouchableOpacity>
      <Text style={{fontSize:22,fontWeight:'bold',alignItems:'center',justifyContent:'center',marginLeft:110}}>eNACH</Text>
      </View>
             <View style={{marginTop:20}}>

             </View>
             <AnimatedLoader
              visible={loading}
              overlayColor="rgba(255,255,255,0.75)"
              source={require("../loading-state.json")}
              animationStyle={styles.lottie}
              speed={1}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Loading.....</Text>
          </AnimatedLoader>
        </View>

        // <FlatList
        //      data={requestId}
        //      renderItem={renderList}
        // />

  )
 }

 const styles=StyleSheet.create({
     renderview:
     {
         marginBottom:10,
         borderColor:"grey",
         alignSelf:"center",
         shadowColor: 'black',
         shadowOpacity: 0.26,
         shadowOffset: { width: 0, height: 2 },
         shadowRadius: 8,
         elevation: 5,
         borderRadius: 5,
         backgroundColor: '#FFFFFF',
         width:350,
     },
     insideview:{
         flexDirection:"row",
         borderBottomWidth:1,
         borderBottomColor:"black",
         marginLeft:10,
         marginRight:10,
         padding:5,
         justifyContent:"flex-start"
     },
     txt5:{

         color:"black",
         fontSize:16,
         borderBottomColor:"black",
         fontWeight:"bold",
     },
     txt3:{
         color:"black",
         fontSize:16,
         fontWeight:"bold",
     },
     inputbox:{
       position:'relative',
       backgroundColor:'#E8E8E8',
       borderRadius: 16,
       width:300,
       height:'auto',
       alignItems: 'flex-start',
       paddingLeft:15,
       paddingVertical:5,
       margin:10,
       marginTop:5,
       marginLeft:50
   },
   slide:{
     marginLeft:20,
     marginRight:20
   },

   btn:{
     // margin:2,
     padding:10,
     width:100,
     justifyContent:"center",
     alignItems:"center",
     alignSelf:"center",
     borderRadius:5,
     backgroundColor:"#4CAF50",
   marginTop:10,
   marginBottom:30
     },
     btn1:{
       padding:5,
       width:60,
       justifyContent:"center",
       alignItems:"center",
       borderRadius:5,
       backgroundColor:"#4CAF50",
       marginLeft:10
       },
       lottie: {
         width: 150,
         height: 150
       },

 })


 export default Enach;
