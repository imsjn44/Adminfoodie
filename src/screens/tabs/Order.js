import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View, ScrollView } from 'react-native';

const Order = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  
  const [placedCount, setPlacedCount] = useState(1);
  const [preparingCount, setPreparingCount] = useState(0); // Initialize preparingCount to 0
  const [currentCategory, setCurrentCategory] = useState('PLACED');

  const renderTitle = () => {
    switch (currentCategory) {
      case 'PLACED':
        return 'ORDER LIST';
      case 'PREPARING':
        return 'PREPARING ORDERS';
      case 'SHIPPED':
        return 'SHIPPING ORDERS';
      default:
        return 'ORDER LIST';
    }
  }

  const handlePrepare = () => {
    setPreparingCount(preparingCount + 1); // Increment preparingCount
    setPlacedCount(0); // Set placedCount to 0
    setCurrentCategory('PREPARING');
  }

  return (
    <View style={styles.container}>
      <View style={styles.flexbox}>
        <TouchableOpacity
          style={styles.logoutIcon}
          onPress={() => console.log('Logout icon pressed')}
        >
          <Image
            source={require('../../images/logout.png')}
            style={styles.logoutImage}
          />
        </TouchableOpacity>

        <View style={styles.user}>
          <Image source={require('../../images/user.png')} style={styles.usericon} />
        </View>

        <Text style={styles.adminName}>Admin</Text>
      </View>

      <Text style={styles.reviewTitle}>{renderTitle()}</Text>
      <View style={styles.horizontalline} />
      <ScrollView style={styles.container2}>
        <View style={styles.categoryButtons}>
          <TouchableOpacity style={styles.catButton} onPress={() => { setPlacedCount(placedCount); setCurrentCategory('PLACED'); }}>
            <Text style={styles.buttonText}>PLACED ({placedCount})</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catButton2} onPress={() =>{setPreparingCount(preparingCount+1); setCurrentCategory('PREPARING')}}>
            <Text style={styles.buttonText}>PREPARING ({preparingCount})</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catButton3} onPress={() => setCurrentCategory('SHIPPED')}>
            <Text style={styles.buttonText}>SHIPPED</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orderDetailsBox}>
          <TouchableOpacity style={styles.Button5} onPress={handlePrepare}>
            <Text >PREPARE</Text>
          </TouchableOpacity>
          <View style={styles.orderDetails}>
            <Text style={styles.orderText}>Order ID: #123456</Text>
            <Text style={styles.orderText}>@test</Text>
            <Text style={styles.Button2}>Date: {formattedDate} {formattedTime}</Text>
            <Text style={styles.orderText}>Order Category: Pizza</Text>
            <Text style={styles.catButton4}>Name of Item: Margherita Pizza</Text>
            <Text style={styles.orderText}>Delivery Charge: Rs.50</Text>
            <Text style={styles.orderText}>Total Price: Rs.300</Text>
          </View>

          <Text style={styles.noteTitle}>Note: Put the extra cheese, please!</Text>
          <Text style={styles.noteText}>Delivery Info: Leave at front door</Text>
          <Text style={styles.noteText}>Address: KUBH hostel, Dhulikhel</Text>
          <Text style={styles.noteText}>Phone No: 9865421383</Text>

        </View>
      </ScrollView>
    </View>
  )
}

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
  },
  flexbox: {
    backgroundColor: '#f57842',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logoutIcon: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  adminName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  reviewTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f57842',
    marginBottom: 10,
    alignSelf: 'center',
  },
  user: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 110,
  },
  usericon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  horizontalline: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center',
  },
  container2: {
    padding: 10,
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  catButton: {
    backgroundColor: '#f57842',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    marginTop: 20,
    width: '30%',
    alignItems: 'center',
  },
  Button5:{
    backgroundColor: '#f7e51b',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 20,
    marginLeft:240,
    width: '30%',
    alignItems: 'center',
    borderWidth:.5,
  },
  catButton2: {
    backgroundColor: '#f7e51b',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    marginTop: 20,
    width: '30%',
    alignItems: 'center',
  },
  catButton3: {
    backgroundColor: '#e8320e',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    marginTop: 20,
    width: '30%',
    alignItems: 'center',
  },
  catButton4: {
    backgroundColor: '#e8320e',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    marginTop: 0,
    width: '70%',
    alignItems: 'center',
    marginLeft: 0,
    fontWeight:'bold',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  orderDetailsBox: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#f0f0f0',
  },
  orderDetails: {
    marginBottom: 20,
  },
  orderText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noteText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  Button2: {
    backgroundColor: '#f7e51b',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    marginTop: 0,
    width: '60%',
    alignItems: 'center',
  },
})
