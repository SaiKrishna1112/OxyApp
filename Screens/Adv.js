import  React,{useState} from "react"
import {View,Text,StyleSheet,SafeAreaView,Image,TextInput,Button,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Adv = para=>{
    return(
     <View style={styles.container}>

     <View>
     <Image source={require('../assets/movies.jpeg')} style={{height:400,width:400}} />
     </View>
     <TouchableOpacity style={styles.appButtonContainer}
     onPress={()=>{
         para.navigation.push('Details');}}>
         <Text style={styles.appButtonText}>Next</Text>
     </TouchableOpacity>
        </View>
        );

}

const styles = StyleSheet.create({
    container: {
         flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  txt:{
    fontSize: 20,
    fontWeight: "bold"
  },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
    },
    imageStyle: {
    padding: 15,
    margin: 10,
    height: 75,
    width: 75,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
    sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    height: 80,
    borderRadius: 5,
    margin: 10,
    fontSize: 20,
    width: 250,
  },
  appButtonContainer: {
      marginTop:50,
      backgroundColor: "#569F40",
      borderRadius: 17,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:330
    },
    appButtonText: {
      fontSize: 19,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",

    },
});
export default Adv;
