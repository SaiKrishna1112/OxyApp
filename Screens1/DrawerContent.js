import React,{useState} from 'react';
import { StyleSheet, View,TouchableOpacity,Image,ToastAndroid} from 'react-native';

import { ImagePicker } from 'react-native-image-picker';
import {
   Avatar,
   Title,
   Caption,
   Drawer,
   Paragraph,
   Text,
   TouchableRipple,
   Switch,

} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem,
 } from '@react-navigation/drawer';


 import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';



 export function DrawerContent(props){
  const userDetail = useSelector(state=>state.logged);
  const [pickedImagePath, setPickedImagePath] = useState('');
  const setToastMsg= msg =>{
   ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

   const uploadImage=()=>{
    let options={
     mediaType: 'photo',
     quality:1,
     includeBase64: true,
    };

    ImagePicker(options,response =>{
     if(response.didCancel) {
      setToastMsg('Cancelled image selection');
     }else if(response.errorCode=='permissions'){
      setToastMsg('permissions not satisfied')
     }else if(response.errorCode=='other'){
      setToastMsg(response.errorMessage)
     }else if (response.assets[0].fileSize>2097152) {
      alert("maximum image size exceeded");
     }else {
      setPickedImagePath(response.assets[0].base64);
     }
    });
   };
  var LR;
  var BR;
     return(
           <View style={{flex:1}}>
               <DrawerContentScrollView {...props} style={{flex:1,margin:20,marginTop:30}}>
                <View style={{flexDirection:'row'}}>
                      <TouchableOpacity onPress={uploadImage}>
                        <Avatar.Image size={70} source={require('../assets/avatar.png')}/>
                        </TouchableOpacity>
                   <View style={{flexDirection:'column',marginLeft:20}}>
                       <Title style={{fontSize:15,width:100}}>{userDetail.firstName+userDetail.lastName}</Title>
                       <Caption>{userDetail.primaryType!='LENDER'? <Text>BR</Text>:<Text>LR</Text>}<Text>{userDetail.userId}</Text></Caption>

                   </View>
                </View>

                <Drawer.Section style={{marginTop:40,}}>
                   <DrawerItem
                   icon={({color,size})=>(
                       <Icon
                       name='apps'
                       color={color}
                       size={size}
                       />
                   )}
                   label='Dashboard'
                   onPress={()=>{props.navigation.navigate('Home')}}
                   />

                   <DrawerItem
                   icon={({color,size})=>(
                       <Icon
                       name='person-circle'
                       color={color}
                       size={size}
                       />
                   )}
                   label='Profile'
                   onPress={()=>{props.navigation.navigate('Profile')}}
                   />
                   <DrawerItem
                   icon={({color,size})=>(
                       <Icon
                       name='calculator'
                       color={color}
                       size={size}
                       />
                   )}
                   label='EMI Calculator'
                   onPress={()=>{props.navigation.navigate('EmiCalculator')}}
                   />
                   <DrawerItem
                      icon={({color,size})=>(
                          <Icon
                          name='stats-chart-outline'
                          color={color}
                          size={size}
                          />
                      )}
                      label='Running Deals'
                      onPress={()=>{props.navigation.navigate('OngoingDeals')}}
                      />
                      <DrawerItem
                         icon={({color,size})=>(
                             <Icon
                             name='person'
                             color={color}
                             size={size}
                             />
                         )}
                         label='Personal Deals'
                         onPress={()=>{props.navigation.navigate('PersonalDeals')}}
                         />
                      <DrawerItem
                         icon={({color,size})=>(
                             <Icon
                             name='trending-up-sharp'
                             color={color}
                             size={size}
                             />
                         )}
                         label='Participated Deals'
                         onPress={()=>{props.navigation.navigate('ParticpatedDeals')}}
                         />
                      <DrawerItem
                         icon={({color,size})=>(
                             <Icon
                             name='trending-down-sharp'
                             color={color}
                             size={size}
                             />
                         )}
                         label='Closed Deals'
                         onPress={()=>{props.navigation.navigate('MyClosedDeals')}}
                         />
                         <DrawerItem
                            icon={({color,size})=>(
                                <Icon
                                name='wallet'
                                color={color}
                                size={size}
                                />
                            )}
                            label='Withdraw'
                            onPress={()=>{props.navigation.navigate('Withdrawal')}}
                            />
                 <DrawerItem
                   icon={({color,size})=>(
                       <Icon
                       name='person-add'
                       color={color}
                       size={size}
                       />
                   )}
                   label='Referral Friend'
                   onPress={()=>{props.navigation.navigate('ReferralFriend')}}
                   />
                   <DrawerItem
                     icon={({color,size})=>(
                         <Icon
                         name='person-add'
                         color={color}
                         size={size}
                         />
                     )}
                     label='Referral Status'
                     onPress={()=>{props.navigation.navigate('LenderReferralStatus')}}
                     />
                   <DrawerItem
                      icon={({color,size})=>(
                          <Icon
                          name='mail-outline'
                          color={color}
                          size={size}
                          />
                      )}
                      label='Write To Us'
                      onPress={()=>{props.navigation.navigate('Support')}}
                      />
                      <DrawerItem
                         icon={({color,size})=>(
                             <Icon
                             name='eye'
                             color={color}
                             size={size}
                             />
                         )}
                         label='View Ticket History'
                         onPress={()=>{props.navigation.navigate('Tickethistory')}}
                         />
                         <DrawerItem
                            icon={({color,size})=>(
                                <Icon
                                name='eye'
                                color={color}
                                size={size}
                                />
                            )}
                            label='Contact'
                            onPress={()=>{props.navigation.navigate('Contact12')}}
                            />
                            <DrawerItem
                               icon={({color,size})=>(
                                   <Icon
                                   name='eye'
                                   color={color}
                                   size={size}
                                   />
                               )}
                               label='GPRS'
                               onPress={()=>{props.navigation.navigate('GPRS')}}
                               />
               </Drawer.Section>

               </DrawerContentScrollView>

               <Drawer.Section style={{margin:20,marginBottom:50}}>
                   <DrawerItem
                   icon={({color,size})=>(
                       <Icon
                       name='log-out-outline'
                       color={color}
                       size={size}
                       />
                   )}
                   label='Sign Out'
                   onPress={()=>{props.navigation.navigate('Login1')}}
                   />
               </Drawer.Section>

           </View>
     );
 }
