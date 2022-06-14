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
   List

} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem,
 } from '@react-navigation/drawer';


 import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';



 export function BorrowerDrawerContent(props){
  const userDetail = useSelector(state=>state.logged);
  const [pickedImagePath, setPickedImagePath] = useState('');
  const setToastMsg= msg =>{
   ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  var LR;
  var BR;
     return(
           <View style={{flex:1}}>
               <DrawerContentScrollView {...props} style={{flex:1,margin:20,marginTop:30}}>
                <View style={{flexDirection:'row'}}>
                      <TouchableOpacity>
                        <Avatar.Image size={70} source={require('./avatar.png')}/>
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
                              name='cash'
                              color={color}
                              size={size}
                              />
                          )}
                          label='Borrowing'
                          onPress={()=>{props.navigation.navigate('Borrowings')}}
                          />
                          <DrawerItem
                             icon={({color,size})=>(
                                 <Icon
                                 name='file-tray-full-outline'
                                 color={color}
                                 size={size}
                                 />
                             )}
                             label='Agreed Loans'
                             onPress={()=>{}}
                             />
                             <DrawerItem
                                icon={({color,size})=>(
                                    <Icon
                                    name='create-outline'
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label='eNACH'
                                onPress={()=>{props.navigation.navigate('Enach')}}
                                />
                                <DrawerItem
                                   icon={({color,size})=>(
                                       <Icon
                                       name='checkbox-outline'
                                       color={color}
                                       size={size}
                                       />
                                   )}
                                   label='Accepted Loans'
                                   onPress={()=>{props.navigation.navigate('AcceptedLoans')}}
                                   />
                                      <DrawerItem
                                         icon={({color,size})=>(
                                             <Icon
                                             name='bar-chart-outline'
                                             color={color}
                                             size={size}
                                             />
                                         )}
                                         label='Accepted Offer'
                                         onPress={()=>{props.navigation.navigate('AcceptedOffer')}}
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
                   onPress={()=>{props.navigation.navigate('BorrowerReferralFriend')}}
                   />
                   <DrawerItem
                      icon={({color,size})=>(
                          <Icon
                          name='people-outline'
                          color={color}
                          size={size}
                          />
                      )}
                      label='Referral Status'
                      onPress={()=>{props.navigation.navigate('BorrowerReferralStatus')}}
                      />
                   <DrawerItem
                      icon={({color,size})=>(
                          <Icon
                          name='create'
                          color={color}
                          size={size}
                          />
                      )}
                      label='Write To Us'
                      onPress={()=>{props.navigation.navigate('BorrowerSupport')}}
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
                         onPress={()=>{props.navigation.navigate('BorrowerTickethistory')}}
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
