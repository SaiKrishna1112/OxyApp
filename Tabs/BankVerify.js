import axios from "axios";
import React,{useState} from "react";
import { View,Text,StyleSheet,TextInput,TouchableOpacity,ScrollView,Alert,ActivityIndicator} from "react-native";
import {useSelector} from "react-redux";


const BankVerify=({navigation})=>{
    const count =useSelector(state=>state.counter);
    // console.log(count);

    const[accnum,setaccnum]=useState("026291800001191");
    const[conacc,setconacc]=useState("026291800001191");
    const[ifsc,setifsc]=useState("YESB0000262");
    const[name,setname]=useState("");
    const[bname,setbname]=useState("");
    const[bbranch,setbbranch]=useState("");
    const[bcity,setbcity]=useState("");
    const [shouldShow, setShouldShow] = useState(false);
    const [hide,sethide]=useState(true);
    const[loading,setLoading]=useState(false);

    const verifyfunction=props=>{
      setLoading(true);
        if(accnum==""){
            Alert.alert("Please enter Account Number");
        }
        if(conacc==""){
            Alert.alert("Please check Account Number");
        }
        if(accnum==""){
            Alert.alert("Please enter Account Number");
        }
        if(accnum==conacc){
    axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/verifyBankAccountAndIfsc',{


      bankAccount:"026291800001191",
      ifscCode:"YESB0000262"

    },{

        headers:{
        accessToken: count.headers.accesstoken,

    }})
    .then(function (response) {
      setTimeout(function(){
        setname(response.data.data.nameAtBank);
        setbname(response.data.data.bankName);
        setbbranch(response.data.data.branch);
        setbcity(response.data.data.city);
          setShouldShow(!shouldShow)
          sethide(!hide)
      }, 1000);

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
    }

    const submitfunction=props=>{
        axios.patch('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/OXY_PSreej/bankDetailsForPartner',{
            accountNumber:"026291800001191",
            ifscCode:"YESB0000262",
            bankName:bname,
            branchName:bbranch,
            userName:name
        },{
            headers:{
                accessToken: count.headers.accesstoken,}

        })

    .then(function (response) {

          setTimeout(function(){
           Alert.alert(
     "Success",
     "You have Successfully Verified Bank Details",
     [
       { text: "OK", onPress: () => navigation.push("PartnerDrawer")}
     ]
     );
          }, 1000);
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.response.status);

          console.log(error.response.data.errorMessage);
          Alert.alert(
    "Warring",
    error.response.data.errorMessage,
    [
      { text: "OK", onPress: () => setLoading(false)}
    ]
  );

  }
  );
    }


    return(
<View style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
    <Text style={styles.text}>Bank Details</Text>
    <View style={{width:300,borderBottomWidth:2}}></View>
    <ScrollView>

    <View>

        <Text style={{marginTop:20,marginLeft:25,fontWeight:"bold"}}>Account Number</Text>
        <TextInput placeholder="Account Number" style={styles.input} keyboardType="number-pad" value={accnum}
                                                   onChangeText={(text)=>setaccnum(text)}/>
        <Text style={{marginTop:10,marginLeft:25,fontWeight:"bold"}}>Confirm Account Number</Text>
        <TextInput placeholder="confirm Account Number" style={styles.input}  keyboardType="number-pad" value={conacc}
                                                   onChangeText={(text)=>setconacc(text)}/>
        <Text style={{marginTop:10,marginLeft:25,fontWeight:"bold"}}>IFSC Code</Text>
        <TextInput placeholder="IFSC Code" style={styles.input} value={ifsc}
                                                   onChangeText={(text)=>setifsc(text)}/>

        </View>

        <View>
        {hide ? (
         <TouchableOpacity style={styles.btn}  onPress={verifyfunction} >
                    <Text style={styles.txt1}> Verify   <ActivityIndicator size="small" color="#0000ff" animating={loading}/></Text>
         </TouchableOpacity>
           ):null}
         </View>



         {shouldShow ? (
         <View>

        <Text style={{marginTop:10,marginLeft:25,fontWeight:"bold"}}>Name : </Text>
        <TextInput style={styles.input} value={name}
                                                   onChangeText={(text)=>setname(text)}/>
        <Text style={{marginTop:10,marginLeft:25,fontWeight:"bold"}}>Bank Name</Text>
        <TextInput placeholder="Bank Name" style={styles.input} value={bname}
                                                   onChangeText={(text)=>setbname(text)}/>
        <Text style={{marginTop:10,marginLeft:25,fontWeight:"bold"}}>Bank Branch</Text>
        <TextInput placeholder="Bank Branch" style={styles.input} value={bbranch}
                                                   onChangeText={(text)=>setbbranch(text)}/>
         <Text style={{marginTop:10,marginLeft:25,fontWeight:"bold"}}>Bank City</Text>
        <TextInput placeholder="Bank City" style={styles.input} value={bcity}
                                                   onChangeText={(text)=>setbcity(text)}/>
        <TouchableOpacity style={styles.btn} onPress={submitfunction}>
                <Text style={styles.txt1}> Submit </Text>
        </TouchableOpacity>
        </View>

         ):null}
    </ScrollView>
</View>
    )
}

const styles=StyleSheet.create({
    text:{
        marginTop:70,
        alignSelf:'center',
        fontSize:22,
        fontWeight:"bold",
        marginRight:50
   },
    input:{
        borderColor:'grey',
        borderWidth:2,
        padding:5,
        borderRadius:10,
        marginVertical:5,
        marginHorizontal:10,
        width:290,
        marginLeft:20

      },
    btn:{
        padding:10,
        width:150,
        // justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:5,
        backgroundColor:"#989898",
        marginTop:20,
        // margin:100
        marginBottom:20
    },
    txt1:{
        color:"#000000",
        // fontSize:20
        fontWeight:"bold"
    },

})

export default BankVerify;
