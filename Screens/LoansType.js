import  React,{useState} from "react"
import {View,Text,StyleSheet,SafeAreaView,Image,TextInput,Button} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const LoansType = para=>{
    return(
     <View style={styles.container}>
        <View>
          <View style={styles.Header}>
            <Text style={styles.txt}>LOAN WE OFFER</Text>
          </View>
      <View style={styles.sectionStyle}>
          <Image
            source={require('../assets/Bussiness.png')}
            style={styles.imageStyle}
          />
          <Text style={{padding: 10}}>BUSSINESS LOANS</Text>
        </View>
         <View style={styles.sectionStyle}>
          <Image
            source={require('../assets/homes.png')}
            style={styles.imageStyle}
          />
          <Text style={{padding: 15}}>HOME LOANS</Text>
        </View>
         <View style={styles.sectionStyle}>
          <Image
            source={require('../assets/personal.png')}
            style={styles.imageStyle}
          />
          <Text style={{padding: 15}}>PERSONAL LOANS</Text>
        </View>
         <View style={styles.sectionStyle}>
         <Image
          source={require('../assets/SME.png')}
            style={styles.imageStyle}
          />
          <Text style={{padding: 30}}>SME LOANS</Text>
        </View>
        <Button
        onPress={()=>{
            para.navigation.push('Registration')}}
            title="Next"/>
        </View>
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
});
export default LoansType;
