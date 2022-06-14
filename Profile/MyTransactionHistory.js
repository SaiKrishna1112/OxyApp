import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useSelector} from 'react-redux';
import * as FileSystem from 'expo-file-system';

import { StyleSheet, Text, View,Button ,TextInput,FlatList,Modal,SafeAreaView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyTransactionHistory = ({navigation}) => {
    const [History,setHistory]=useState([])

    const userDetails = useSelector(state=>state.counter);
            var id = userDetails.data.id;
      var access = userDetails.headers.accesstoken;
      function getDownload(){
       axios.get('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/lenderHistoryPdf',
         {headers:{
                 accessToken:access
                }
                    })

           .then(function(response){
               console.log(response.data)
               FileSystem.downloadAsync(
                   response.data.downloadUrl,
                  FileSystem.documentDirectory + 'lenderHistory.pdf'
                 )
                  .then(({ uri }) => {
                    console.log('Finished downloading',uri);
                    alert("Finished downloading")
                  })
                  .catch(error => {
                    console.error(error);
                  });

           })
           .catch(function(error){
               console.log(error)
           })

      }
  function getHistory(){
    axios.get('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/lenderHistory',
      {headers:{
              accessToken:access
             }
                 })

        .then(function(response){
            //console.log(response.data.walletBalance)
            setHistory(response.data)


        })
        .catch(function(error){
            console.log(error)
        })

 }
        const renderList = ({ item }) => {
            return (
            <View style={{backgroundColor:'white',marginHorizontal:8,height:"auto",padding:8,marginVertical:8,borderLeftColor:'green',borderLeftWidth:4.5}}>
                 <View style={styles.flatmain}>
                 <View style={styles.TxtView1}><Text style={styles.Txt1}>Transaction Date</Text></View>
                 <View><Text style={styles.Txt2}>{item.transactionDate}</Text></View>

                 </View>

                 <View style={styles.flatmain}>
                 <View style={styles.TxtView1}><Text style={styles.Txt1}>Account Number </Text></View>
                 {item.debitedStatus=="False"?<View><Text style={styles.Txt2}>{item.accountNumber}</Text></View>
                                         :
                 <View>
                 <View><Text style={styles.Txt2}>Borrower Name:{item.borrowerName}</Text></View>
                 <View><Text style={styles.Txt2}>Loan Id:{item.loanId}</Text></View>
                 </View>
                        }
                 </View>

                 <View style={styles.flatmain}>
                 <View style={styles.TxtView1}><Text style={styles.Txt1}>withdraw</Text></View>
                 <View><Text style={styles.Txt2}>{item.withdrawAmount}</Text></View>
                 </View>

                 <View style={styles.flatmain}>
                 <View style={styles.TxtView1}><Text style={styles.Txt1}>Credited Amount </Text></View>
                 <View><Text style={styles.Txt2}>{item.creditedAmount}</Text>
                 {/* {if(item.paticipatedAmount=="true"){}} */}
                 </View>

                 </View>

                 <View style={styles.flatmain}>
                 <View style={styles.TxtView1}><Text style={styles.Txt1}>Debited Amount </Text></View>
                 <View><Text style={styles.Txt2}>{item.debitedAmount}</Text></View>
                 </View>


                 <View style={styles.flatmain}>
                 <View style={styles.TxtView1}><Text style={styles.Txt1}>Amount From </Text></View>
                 <View><Text style={styles.Txt3}>{item.amountFrom}</Text></View>
                 </View>
                 </View>

            )}

            useEffect(()=>{
               getHistory();
            },[]);

  return (
    <SafeAreaView style={{paddingTop:5,flex:1,marginBottom:0}}>
    <TouchableOpacity onPress={getDownload}>
    <View style={{margin:8,borderWidth:0.2,width:120,borderRadius:20,backgroundColor:'#569F40'}}>
    <Text style={{fontWeight:"bold",fontSize:15,alignSelf:'center'}}><Icon name="download-outline"  size={20} />Download</Text>
    </View>
    </TouchableOpacity>

       <FlatList
           data={History}

           renderItem={renderList}

           keyExtractor={item => item.walletBalance}
      />

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    flatmain:{
      flexDirection:"row",
      alignItems:'center',
      borderBottomColor:'grey',
      borderBottomWidth:1,
      paddingVertical:5
    },

    Txt1:{
        fontWeight:'bold',
        color:'#569F40',
        fontSize:15

    },

    Txt2:{
        fontWeight:'bold',
        color:'black',
        fontSize:15
    },
    Txt3:{
        fontWeight:'bold',
        color:'black',
        fontSize:15,
        width:180
    },

    TxtView1:{
        width:150,
    }

  })

export default MyTransactionHistory
