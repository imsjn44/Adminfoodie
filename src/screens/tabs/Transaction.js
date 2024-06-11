import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Transaction = () => {
  const [momoList, setMomoList] = useState([
    {
      id: 1,
      name: 'Steamed Momo',
      price: 'Rs.140',
      discountPrice: 'Rs.112 (20% off)',
      image: require('../../images/momo1.jpg'),
    },
    {
      id: 2,
      name: 'Open Momo',
      price: 'Rs.165',
      discountPrice: 'No offer available',
      image: require('../../images/momo2.jpg'),
    },
    {
      id: 3,
      name: 'Kothey Momo',
      price: 'Rs.165',
      discountPrice: 'No offer available',
      image: require('../../images/momo3.png'),
    },
    {
      id: 4,
      name: 'Sadheko Momo',
      price: 'Rs.165',
      discountPrice: 'No offer available',
      image: require('../../images/momo4.png'),
    },
    {
      id: 5,
      name: 'Jhol Momo',
      price: 'Rs.165',
      discountPrice: 'No offer available',
      image: require('../../images/momo5.jpg'),
    },
    {
      id: 6,
      name: 'Cheese Momo',
      price: 'Rs.165',
      discountPrice: 'No offer available',
      image: require('../../images/momo6.jpg'),
    },
    {
      id: 7,
      name: 'Fried Momo',
      price: 'Rs.165',
      discountPrice: 'No offer available',
      image: require('../../images/momo7.jpeg'),
    },
  ]);

  const [pastaList, setPastaList] = useState([
    {
      id: 1,
      name: 'Chicken Pasta',
      price: 'Rs.250',
      discountPrice: 'Rs.200 (20% off)',
      image: require('../../images/pasta1.jpg'),
    },
    {
      id: 2,
      name: 'White Sauce Pasta',
      price: 'Rs.220',
      discountPrice: 'No offer available',
      image: require('../../images/pasta2.jpg'),
    },
    {
      id: 3,
      name: 'Tomato Chicken Pasta',
      price: 'Rs.220',
      discountPrice: 'No offer available',
      image: require('../../images/pasta3.jpg'),
    },
    {
      id: 4,
      name: 'Garlic Pasta',
      price: 'Rs.220',
      discountPrice: 'No offer available',
      image: require('../../images/pasta4.jpg'),
    },
    {
      id: 5,
      name: 'Creamy Cheese Pasta',
      price: 'Rs.220',
      discountPrice: 'No offer available',
      image: require('../../images/pasta5.jpg'),
    },
    {
      id: 6,
      name: 'Chilli Pasta',
      price: 'Rs.220',
      discountPrice: 'No offer available',
      image: require('../../images/pasta6.jpg'),
    },
  ]);

  const [dessertList, setDessertList] = useState([
    {
      id: 1,
      name: 'Chocolate Cake',
      price: 'Rs.150',
      discountPrice: 'Rs.120 (20% off)',
      image: require('../../images/dessert1.jpg'),
    },
    {
      id: 2,
      name: 'Ice Cream Sundae',
      price: 'Rs.100',
      discountPrice: 'No offer available',
      image: require('../../images/dessert2.jpg'),
    },
    
  ]);

  const [soupList, setSoupList] = useState([
    {
      id: 1,
      name: 'Mushroom Soup',
      price: 'Rs.80',
      discountPrice: 'Rs.64 (20% off)',
      image: require('../../images/soup1.jpg'),
    },
    {
      id: 2,
      name: 'Chicken Soup',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/soup2.jpg'),
    },
    
  ]);

  const [noodlesList, setNoodlesList] = useState([
    {
      id: 1,
      name: 'Egg-Fried Noodles',
      price: 'Rs.80',
      discountPrice: 'Rs.64 (20% off)',
      image: require('../../images/nood1.jpg'),
    },
    {
      id: 2,
      name: 'Vegetable Hakka Noodles',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/nood2.jpg'),
    },
    {
      id: 3,
      name: 'Spicy Chilli Noodles',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/nood3.jpg'),
    },
    {
      id: 4,
      name: 'Gochujang Noodles',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/nood4.jpg'),
    },
    {
      id: 5,
      name: 'Peanut Chicken Noodles',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/nood5.jpg'),
    },
  ]);

  const [fcList, setFcList] = useState([
    {
      id: 1,
      name: 'Easy Fried Chicken',
      price: 'Rs.80',
      discountPrice: 'Rs.64 (20% off)',
      image: require('../../images/fc1.jpeg'),
    },
    {
      id: 2,
      name: 'Korean Fried Chicken',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/fc2.jpg'),
    },
    {
      id: 3,
      name: 'Extra Crispy Fried Chicken',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/fc3.jpg'),
    },
    {
      id: 4,
      name: 'Butter Milk Fried Chicken',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/fc4.jpg'),
    },
    {
      id: 5,
      name: 'Masala Fried Chicken',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/fc5.jpg'),
    },
  ]);

  const [pizzaList, setPizzaList] = useState([
    {
      id: 1,
      name: 'Cheese Pizza',
      price: 'Rs.80',
      discountPrice: 'Rs.64 (20% off)',
      image: require('../../images/pz1.jpg'),
    },
    {
      id: 2,
      name: 'Veggies Pizza',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/pz2.jpg'),
    },
    {
      id: 3,
      name: 'Taco Pizza',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/pz3.jpg'),
    },
    {
      id: 4,
      name: 'Chicken Pizza',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/pz4.jpg'),
    },
    {
      id: 5,
      name: 'Margherita Pizza',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/pz5.jpg'),
    },
  ]);

  const [colddrinkList, setColddrinkList] = useState([
    {
      id: 1,
      name: 'Chilled Coke',
      price: 'Rs.80',
      discountPrice: 'Rs.64 (20% off)',
      image: require('../../images/cd1.jpg'),
    },
    {
      id: 2,
      name: 'Lassi',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/cd2.jpg'),
    },
    {
      id: 3,
      name: 'Chilled Fanta',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/cd3.jpg'),
    },
    {
      id: 4,
      name: 'Spicy Herbal Juice',
      price: 'Rs.90',
      discountPrice: 'No offer available',
      image: require('../../images/cd4.jpg'),
    },
    {
      id: 5,
      name: 'Cold Coffee',
      price: "Rs.90",
      discountPrice:'No offer available',
      image:require('../../images/cd5.jpg'),
    },
  ]);

  const handleDeleteMomo = id => {
    const updatedList = momoList.filter(item => item.id !== id);
    setMomoList(updatedList);
  };

  const handleDeletePasta = id => {
    const updatedList = pastaList.filter(item => item.id !== id);
    setPastaList(updatedList);
  };

  const handleDeleteDessert = id => {
    const updatedList = dessertList.filter(item => item.id !== id);
    setDessertList(updatedList);
  };

  const handleDeleteSoup = id => {
    const updatedList = soupList.filter(item => item.id !== id);
    setSoupList(updatedList);
  };

  const handleDeleteNoodles = id => {
    const updatedList = noodlesList.filter(item => item.id !== id);
    setNoodlesList(updatedList);
  };

  const handleDeleteFc = id => {
    const updatedList = fcList.filter(item => item.id !== id);
    setFcList(updatedList);
  };

  const handleDeletePizza = id => {
    const updatedList = pizzaList.filter(item => item.id !== id);
    setPizzaList(updatedList);
  };

  const handleDeleteColddrink = id => {
    const updatedList = colddrinkList.filter(item => item.id !== id);
    setColddrinkList(updatedList);
  };

  const renderFoodList = (foodList, handleDelete) => {
    return foodList.map(food => (
      <View key={food.id} style={styles.foodItem}>
        <Image source={food.image} style={styles.foodImage} />
        <View style={styles.foodInfo}>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodPrice}>{food.price}</Text>
          <Text style={styles.foodDiscountPrice}>{food.discountPrice}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleDelete(food.id)}
          style={styles.deleteIcon}>
          <Image
            source={require('../../images/delete.png')}
            style={styles.deleteImage}
          />
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexbox}>
        <TouchableOpacity
          style={styles.logoutIcon}
          onPress={() => console.log('Logout icon pressed')}>
          <Image
            source={require('../../images/logout.png')}
            style={styles.logoutImage}
          />
        </TouchableOpacity>

        <View style={styles.user}>
          <Image source={require('../../images/user.png')} style={styles.usericon} />
        </View>

     <View>
        <Text style={styles.adminName}>Admin</Text>
      </View>
  
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>MOMOS</Text>
          {renderFoodList(momoList, handleDeleteMomo)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>PASTA</Text>
          {renderFoodList(pastaList, handleDeletePasta)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>DESSERTS</Text>
          {renderFoodList(dessertList, handleDeleteDessert)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>SOUPS</Text>
          {renderFoodList(soupList, handleDeleteSoup)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>NOODLES</Text>
          {renderFoodList(noodlesList, handleDeleteNoodles)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>FRIED CHICKENS</Text>
          {renderFoodList(fcList, handleDeleteFc)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>COLD DRINKS</Text>
          {renderFoodList(colddrinkList, handleDeleteColddrink)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>PIZZA</Text>
          {renderFoodList(pizzaList, handleDeletePizza)}
        </View>
      </ScrollView>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexbox: {
    backgroundColor: '#f57842',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    paddingHorizontal: 10,
  },
  adminName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
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
  scrollView: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f57842',
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f7e51b',
    borderRadius: 10,
    padding: 10,
    position: 'relative',
  },
  foodImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  foodInfo: {
    marginLeft: 20,
    flex: 1,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 16,
    color: '#555',
  },
  foodDiscountPrice: {
    fontSize: 16,
    color: '#f00',
  },
  deleteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  deleteImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
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
