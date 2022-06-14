import React,{useState} from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from "react-redux";
import axios from 'axios';
import { SafeAreaView } from "react-native-safe-area-context";


const ReferralStatus=()=>{
    const[status,setstatus]=useState([]);
    const count =useSelector(state=>state.counter);
    var partnerid=count.data.id;


    
    axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+partnerid+'/displayingReferrerInfo',
    {
         pageNo:1,
         pageSize:10
    },
    {headers:{
        accessToken: count.headers.accesstoken,
    }}
    )
    .then(function(response){
        setstatus(response.data.listOfLenderReferenceDetails)
        // console.log(response.data.listOfLenderReferenceDetails);
        // console.log(response.data.listOfLenderReferenceDetails);

    })
    .catch(function(error){
        // console.log(error)
    })

    

        // <View style={styles.container}>
        //     <Text style={styles.txt1}> Referral Info  </Text>
        // <View style={styles.cont}>
        // <Text style={styles.txt2}> Note : </Text>

            
        //     <Text style={styles.text}><Icon name="arrow-forward" color="#4F8EF7" size={20}/> Invited: You have invited but your friend is not yet registered.
        //     </Text>
        //     <Text style={styles.text}><Icon name="arrow-forward" color="#4F8EF7" size={20}/>  Registered: Your friend has registered and reviewing Lending opportunities.
        //     </Text>
        //     <Text style={styles.text1}><Icon name="arrow-forward" color="#4F8EF7" size={20}/> Lent Money: Your friend has particiated in Lending and You started earning.

        //     </Text>
        // </View>
        
        // <View style={styles.cont}>   
        // <TouchableOpacity style={styles.btn1}  >
        //         <Text style={styles.txt4} ><Icon name="clipboard" color="#4F8EF7" size={20}/> Copy Borrower Referral Link </Text>
        // </TouchableOpacity>
        // <TouchableOpacity style={styles.btn2}  >
        //         <Text style={styles.txt4} ><Icon name="clipboard" color="#4F8EF7" size={20}/> Copy Borrower Referral Link </Text>
        // </TouchableOpacity>
        // <TouchableOpacity style={styles.btn}  >
        //         <Text style={styles.txt3} ><Icon name="download" color="#4F8EF7" size={20}/> Referral Status </Text>
        // </TouchableOpacity>
        // </View>
        // </View>
        

    const renderList = ({ item }) => {
        return (
        
     
<View style={{flex:1}}>
          <View style={styles.renderview}>
              <View style={styles.insideview}>
                 <Text style={styles.txt5}>UserName  </Text>
                 <View style={styles.txt6}>
                 <Text >{item.refereeName}</Text>
                 </View>
              </View>

              <View style={styles.insideview}>
                <Text style={styles.txt5}>MobileNumber  </Text>
                <Text style={{color:"black",fontSize:14,paddingLeft:40}}>{item.refereeMobileNumber}</Text>
              
              </View>

              <View style={styles.insideview}>
                <Text style={styles.txt5}>Email  </Text>
                <Text style={{color:"black",fontSize:14,paddingLeft:100,width:250}}>{item.refereeEmail}</Text>
              </View>

              <View style={styles.insideview}>
                <Text style={styles.txt5}>Status  </Text>
                <Text style={{color:"black",fontSize:14,paddingLeft:90}}>{item.status}</Text>
              </View>

              <View style={styles.insideview1}>
                <Text style={styles.txt5}>Referred On   </Text>
                <Text style={{color:"black",fontSize:14,paddingLeft:50}}>{item.referredOn}</Text>
              </View>
          </View>
          </View>
        
        );
      };
  


 
    return (
        <ScrollView nestedScrollEnabled={true}>
        <SafeAreaView style={{backgroundColor:"#CCD8E1"}}>
      <View >

          <Text style={{fontSize:17,fontWeight:"bold",marginLeft:10}}>Referral Info </Text>
          <View style={styles.cont}>
            <Text style={styles.txt2}> Note : </Text>
            <Text style={styles.text}><Icon name="arrow-forward" color="#4F8EF7" size={18}/> Invited: You have invited but your friend is not yet registered.
            </Text>
            <Text style={styles.text}><Icon name="arrow-forward" color="#4F8EF7" size={18}/>  Registered: Your friend has registered and reviewing Lending opportunities.
            </Text>
            <Text style={styles.text1}><Icon name="arrow-forward" color="#4F8EF7" size={18}/> Lent Money: Your friend has particiated in Lending and You started earning.
            </Text>
          </View>
          <View>   
            <TouchableOpacity style={styles.btn1}  >
               <Text style={styles.txt4} ><Icon name="clipboard" color="#4F8EF7" size={18}/> Copy Borrower Referral Link </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}  >
               <Text style={styles.txt4} ><Icon name="clipboard" color="#4F8EF7" size={20}/> Copy Borrower Referral Link </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}  >
                 <Text style={styles.txt3} ><Icon name="download" color="#4F8EF7" size={20}/> Referral Status </Text>
            </TouchableOpacity>
         </View>
      </View>
         
        
        <View>
            
        <FlatList
             data={status}
             renderItem={renderList}
             keyExtractor={item => item.refereeMobileNumber}
        />
        </View>
        {/* <Text>{status}</Text> */}
       
        </SafeAreaView>
         </ScrollView> 
        )

}


const styles=StyleSheet.create({
container:{
    
    backgroundColor:"#CCD8E1"
    
},
cont:{
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
width:330,
marginLeft:15,
},
txt1:{
    marginTop:40,
    marginLeft:15,
    fontSize:15,
    fontWeight:"bold"
},
txt2:{
    marginTop:5,
    marginLeft:15,
    fontSize:15,
    fontWeight:"bold"
},
text:{
    marginLeft:10,
    marginRight:10
},
text1:{
    marginLeft:10,
    marginRight:10,
    marginBottom:5

},
btn:{
    padding:10,
    width:150,
   marginLeft:190,
    borderRadius:5,
    backgroundColor:"#FFDDCA",
    marginTop:5,
    marginBottom:10
},
btn1:{
    padding:10,
    width:250,
    borderRadius:5,
    backgroundColor:"#B38481",
    marginTop:7,
    marginLeft:90
},
btn2:{
    padding:10,
    width:250,
    borderRadius:5,
    backgroundColor:"#C4AEAD",
    marginTop:5,
    marginLeft:90
},
txt3:{
    color:"#000000",
    // fontSize:20
    fontWeight:"bold"
},
txt4:{
    color:"#000000",
    // fontSize:20
    fontWeight:"bold"
},
renderview:
{
    // alignItems:'flex-start',
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

    width:300,
    // marginLeft:15,
},
txt5:{
   
    color:"black",
    fontSize:14,
    borderBottomColor:"black",
    fontWeight:"bold",
},
txt6:{
    color:"black",
    fontSize:14,
    paddingLeft:70

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
insideview1:{
    flexDirection:"row",
    marginLeft:10,
    marginRight:10,
    padding:5
}
})
export default ReferralStatus;