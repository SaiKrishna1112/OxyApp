import React from "react";
import {Text,View,TextInput,TouchableOpacity,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const NeoBank=props=>{
    return(
        <View style={styles.container}>
            <View>
            <TouchableOpacity onPress={()=>{props.navigation.push("PartnerDrawer")}}>
                <Icon name="arrow-back" color={"black"} size={24} style={{marginTop:20}}/>
            </TouchableOpacity>
                <Text style={{fontWeight:"bold",fontSize:18,alignSelf:"center"}}> Set-up a NeoBank</Text>
            <View style={styles.innerview}>
                <Text style={{fontWeight:"bold",fontSize:15,marginTop:10,marginLeft:10}}>Welcome to OxyLoans !</Text>

                <Text style={styles.txt}>  <Icon name="arrow-forward" color={"black"} size={24} />In 2019-Feb, we got the RBI NBFC-P2P license.</Text>

                <Text style={styles.txt}><Icon name="arrow-forward" color={"black"} size={24} />Using this license, We are able to offer p2p lending services.</Text>

                <Text style={styles.txt}><Icon name="arrow-forward" color={"black"} size={24} />In p2p lending lenders & borrowers, both are Individuals/companies/PAN card holders.</Text>

              <Text style={styles.txt1}><Icon name="arrow-forward" color={"black"} size={24} />Using the following referral links, you can launch the p2p lending platform which we are calling a Neo bank.</Text>

              <View>
            <TouchableOpacity style={styles.btn1}  >
               <Text style={styles.txt2} ><Icon name="clipboard" color="#4F8EF7" size={18}/> Copy Borrower Referral Link </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}  >
               <Text style={styles.txt2} ><Icon name="clipboard" color="#4F8EF7" size={20}/> Copy Lender Referral Link </Text>
            </TouchableOpacity>

         </View>

            </View>
            </View>

        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        marginLeft:20

    },
    innerview:{
        marginTop:20,
        borderTopWidth:1.8,
        borderTopColor:"blue",
        marginRight:20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'

    },
    txt:{
        fontSize:15,
        marginRight:20,
        marginLeft:15,

    },
    txt1:{
        fontSize:15,
        marginRight:20,
        marginLeft:15,
        marginBottom:10

    },
    txt2:{
        marginTop:5,
        marginLeft:15,
        fontSize:15,
        fontWeight:"bold"
    },
    btn1:{
        padding:6,
        width:250,
        borderRadius:5,
        backgroundColor:"#B38481",
        marginTop:7,
        marginLeft:60
    },
    btn2:{
        padding:6,
        width:250,
        borderRadius:5,
        backgroundColor:"#C4AEAD",
        marginTop:5,
        marginLeft:60,
        marginBottom:20
    },

})

export default NeoBank;
