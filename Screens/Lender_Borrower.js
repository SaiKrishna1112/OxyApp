import  React,{useState} from "react"
import {View,Text,StyleSheet,SafeAreaView,Image,TextInput,Button,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Asset } from 'expo-asset';

const Lender_Borrower = props =>{
 
    return(
     <SafeAreaView style={styles.container}>
        <View>
        <TouchableOpacity onPress={()=>{
            props.navigation.push('Login1'); }}>
            <View style={styles.boxcontainer}>
              <View>
                <View style={styles.logo}>
                  <Image source={require('../assets/needloan.jpg')} style={styles.img} />
                </View>
             </View>
           </View>
          </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            props.navigation.push('Login1');}}>
            <View style={styles.boxcontainer}>
              <View>
                <View style={styles.logo}>
                  <Image source={require('../assets/lender.jpg')} style={styles.img} />
                </View>
             </View>
           </View>
          </TouchableOpacity>
        </View>
     </SafeAreaView>
        );

}

const styles = StyleSheet.create({
    container: {
         flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxcontainer: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#fff',
   borderColor: '#000',
   borderWidth: 1,
   height: 80,
   borderRadius: 5,
   margin: 10,
   width: 300,
   },
   img:{
   height:80,
   width:300
   },
   logo: {
       justifyContent: 'center',
       alignItems: 'center',
   },
});
export default Lender_Borrower;
