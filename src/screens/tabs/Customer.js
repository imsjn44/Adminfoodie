import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const Customer = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Sabin Karki',
      feedback: '"Fast delivery, hot food, and delicious flavors. Definitely ordering again!"',
      rating: 5,
      image: require('../../images/customer1.jpg'),
      posted: false,
    },
    {
      id: 2,
      name: 'Salon Gautam',
      feedback: 'Great pizza, but delivery took longer than expected. Still worth it!',
      rating: 4,
      image: require('../../images/customer2.png'),
      posted: false,
    },
    {
      id: 3,
      name: 'Mohit Shrestha',
      feedback: 'Overcooked pasta, bland sauce. Not worth the price.',
      rating: 2,
      image: require('../../images/customer3.jpg'),
      posted: false,
    },
    {
      id: 4,
      name: 'Nitish Sharma',
      feedback: 'Delicious pasta dishes, but portions were a bit small for the price.',
      rating: 3,
      image: require('../../images/customer4.jpg'),
      posted: false,
    },
    {
      id: 5,
      name: 'Nabin Shrestha',
      feedback: 'Great service!',
      rating: 5,
      image: require('../../images/customer5.jpg'),
      posted: false,
    },
    {
      id: 6,
      name: 'Nischal Baral',
      feedback: 'Waste of money!',
      rating: 1,
      image: require('../../images/customer6.jpg'),
      posted: false,
    },
  ]);

  const togglePostStatus = (id) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === id ? { ...customer, posted: !customer.posted } : customer
      )
    );
  };

  const renderCustomer = ({ item }) => (
    <View style={styles.customerItem}>
      <Image source={item.image} style={styles.customerImage} />
      <View style={styles.customerInfo}>
        <Text style={styles.customerName}>{item.name}</Text>
        <Text style={styles.customerFeedback}>{item.feedback}</Text>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              source={index < item.rating ? require('../../images/star_filled.png') : require('../../images/star_empty.png')}
              style={styles.ratingIcon}
            />
          ))}
          <Text style={styles.ratingText}>{item.rating}/5</Text>
        </View>
        <TouchableOpacity
          onPress={() => togglePostStatus(item.id)}
          style={styles.postButton}
        >
          <Text style={styles.postButtonText}>
            {item.posted ? 'UNPOST' : 'POST'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

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

      <Text style={styles.reviewTitle}>CUSTOMER REVIEWS WALL</Text>
      <FlatList
        data={customers}
        renderItem={renderCustomer}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

export default Customer;

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
    justifyContent: 'space-between',
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
  customerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f7e51b',
    borderRadius: 20,
    padding: 10,
  },
  customerImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  customerInfo: {
    marginLeft: 20,
    flex: 1,
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  customerFeedback: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  postButton: {
    backgroundColor: '#f57842',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  postButtonText: {
    color: 'white',
    fontSize: 16,
  },
  flatListContentContainer: {
    paddingBottom: 20, 
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
});
