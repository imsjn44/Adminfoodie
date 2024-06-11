import React from 'react'
import {Image, StyleSheet,Text,TouchableOpacity,View} from 'react-native'
import { useState } from 'react';
import Items from './tabs/Items';
import Order from './tabs/Order';
import Add from './tabs/Add';
import Transaction from './tabs/Transaction';
import Customer from './tabs/Customer';

const Dashboard = () => {
  const [selectedTab,setselectedTab]=useState(0);
  return (
<View style={styles.container}>
    {selectedTab==0?(<Items/>):selectedTab==1?(<Order/>):selectedTab==2?(<Add/>):selectedTab==3?(<Transaction/>):(<Customer/>)}
    <View style={styles.bottomView}>
    <TouchableOpacity style={styles.bottomTab} onPress={()=>{setselectedTab(0);}}>
    <Image source={require('../images/items.png')} style={[styles.bottomTagImg,{tintColor:selectedTab==0?'#f57842':'black'}]} />  
    </TouchableOpacity>

    <TouchableOpacity style={styles.bottomTab} onPress={()=>{setselectedTab(1);}}>
    <Image source={require('../images/order.png')} style={[styles.bottomTagImg,{tintColor:selectedTab==1?'#f57842':'black'}]} />
    </TouchableOpacity>


    <TouchableOpacity style={styles.bottomTab} onPress={()=>{setselectedTab(2);}}>
    <Image source={require('../images/add.png')} style={[styles.bottomTagImg,{tintColor:selectedTab==2?'#f57842':'black'}]} /> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.bottomTab} onPress={()=>{setselectedTab(3);}}>
    <Image source={require('../images/transaction.png')} style={[styles.bottomTagImg,{tintColor:selectedTab==3?'#f57842':'black'}]} /> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.bottomTab} onPress={()=>{setselectedTab(4);}}>
    <Image source={require('../images/customer.png')} style={[styles.bottomTagImg,{tintColor:selectedTab==4?'#f57842':'black'}]} />
    </TouchableOpacity>
    </View>
</View>
  )
}

export default Dashboard

const styles=StyleSheet.create({

    container:{
        flex:1,
    
    },
    bottomView:{
    width:'100%',
    height:60,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    position:'absolute',
    bottom:0,
    backgroundColor:'#d8dbed',

    },

    bottomTab:{
        height:'100%',
        width:'20%',
        justifyContent:'center',
        alignItems:'center',
    },

    bottomTagImg:{
        width:26,
        height:26,
    }


    


})

