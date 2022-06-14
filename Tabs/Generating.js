import React,{useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';



import { Text, View , StyleSheet ,TextInput,TouchableOpacity,Alert,ScrollView,ToastAndroid} from 'react-native';
import {useSelector} from "react-redux";
import {Picker} from "@react-native-picker/picker";


const Generating=props=>{
    const count =useSelector(state=>state.counter);
    // console.log(count)
    var partnername=count.data.partnerUtmName;

    const[name,setname]=useState("");
    const[cname,setcname]=useState("");
    const[address,setaddress]=useState("");
    const[role,setrole]=useState("");
    const[services,setservices]=useState("");
    const[email,setemail]=useState("");
    const[city,setcity]=useState("");

    // const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    const[loading,setLoading]=useState(false);
    const [selectedValue, setSelectedValue] = useState("NDA");
    const errormsg = msg => {
        ToastAndroid.showWithGravity(msg,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };



const generatefunction=props=>{
    if(name=="")
    {
        errormsg("Please enter your name");
        return false;
    }
    if(cname =="")
    {
        errormsg("Please enter your Company Name");
         return false;
    }
    if(address=="")
    {
        errormsg("Please enter your Company Address");
        return false;
    }
    if(role=="")
    {
        errormsg("Please enter your Role");
        return false;
    }
    if(email=="")
    {
        errormsg("Please enter email_id");
        return false;
    }
    if(services=="")
    {
        errormsg("Please enter your services ");
        return false;
    }
    if(city=="")
    {
        errormsg("Please enter your city");
        return false;
    }
    if(selectedValue=="")
    {
        errormsg("Please choose type");
        return false;
    }


    console.log(name,email,services,address,cname,role,selectedValue,city);
        axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+partnername+'/partnerNDA',{

                partnerName:name,
                companyName:cname,
                companyAddress:address,
                title:role,
                emailId:email,
                type:selectedValue,
                services:services,
                city:city

        },
        {headers:{
            accessToken: count.headers.accesstoken,
            responseType: 'blob',
        }})
        .then(function (response) {
         // FileSystem.downloadAsync(
         //         'http://techslides.com/demos/sample-videos/small.mp4',
         //          FileSystem.documentDirectory + 'small.mp4'
         //       )
         //   .then(({ uri }) => {
         //    console.log('Finished downloading to ', uri);
         //     })
         //  .catch(error => {
         //    console.error(error);
         //    });
               setTimeout(function(){
               console.log(response.data);
               Alert.alert(
                  "Success",
                  "Successfully Generated ",
                  [
                     { text: "ok" , onPress: () => ("response.data.status","_blank") }


                  ]
                  );
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
<View style={styles.container}>

        <Text style={styles.txt2}> Generate NDA AND MOU  </Text>
        <ScrollView>
    <View style={styles.cont1}>
        <Text style={styles.txt1}>Details </Text>
                <View style={styles.inputbox}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Name : </Text>
                <TextInput  placeholder="Name"onChangeText={(text)=>setname(text)}/>
                </View>

                <View style={styles.inputbox}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Company Name: </Text>
                <TextInput  placeholder="Company Name"onChangeText={(text)=>setcname(text)}/>
               </View>

               <View style={styles.inputbox}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Company Address: </Text>
                <TextInput  placeholder="Company Address"onChangeText={(text)=>setaddress(text)} />
                </View>

               <View style={styles.inputbox}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Role: </Text>
                <TextInput  placeholder="Role"onChangeText={(text)=>setrole(text)} />
               </View>

               <View style={styles.inputbox}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Email: </Text>
                <TextInput  placeholder="Email"onChangeText={(text)=>setemail(text)} />
               </View>

               <View style={styles.inputbox}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Services: </Text>
                <TextInput  placeholder="Services"onChangeText={(text)=>setservices(text)} />
               </View>

               <View style={styles.inputbox}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>City: </Text>
                <TextInput  placeholder="City"onChangeText={(text)=>setcity(text)} />
               </View>
                 <View>
               <Text style={{fontWeight:"bold",fontSize:18,marginLeft:12}}>Type : </Text>
               <Picker
                 selectedValue={selectedValue}
                 style={{ height: 40, width: 300,backgroundColor:"#E8E8E8",marginLeft:18,borderRadius:15,marginTop:5}}
                 onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
               <Picker.Item label="NDA" value="NDA" />
               <Picker.Item label="MOU" value="MOU" />
               </Picker>
               </View>

            <View>
                    <TouchableOpacity style={styles.btn} onPress={generatefunction}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}><Icon name="document" color="black" size={17}/>   Generate  </Text>
                    </TouchableOpacity>
            </View>


    </View>
    </ScrollView>
</View>

    )
    }

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'center',
        justifyContent:'center'

    },
    cont:{
    justifyContent:"flex-start",
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginTop:50,
    width:330,
    marginLeft:15,
    },
    cont1:{
        justifyContent:"flex-start",
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginTop:10,
        width:400,
        alignItems:'center'
    },
    txt1:{
        marginTop:10,
        marginLeft:10,
        fontSize:20,
    },
    text:{
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },
    text1:{
        margin:10
    },
    input:{
        borderColor:'grey',
        borderWidth:2,
        padding:5,
        borderRadius:10,
        marginVertical:10,
        marginHorizontal:10,

      },
      inputbox:{
        position:'relative',
        backgroundColor:'#E8E8E8',
        borderRadius: 16,
        width:300,
        height:'auto',
        alignItems: 'flex-start',
        paddingLeft:20,
        paddingVertical:5,
        // marginTop:20,
        marginBottom:5,
        marginTop:10,
        marginLeft:15
    },
    btn:{
        // margin:2,
        padding:10,
        width:120,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:5,
        backgroundColor:"#4CAF50",
      marginTop:20,
      marginBottom:20
        },
        txt2:{
            marginTop:40,
            fontSize:22,
            marginLeft:10,
           fontWeight:"bold",
           alignSelf:'center'
        }




})
export default Generating;
