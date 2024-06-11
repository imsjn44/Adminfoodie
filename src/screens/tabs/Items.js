import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';

const Items = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [images, setImages] = useState([
    { id: 1, source: require('../../images/momo.jpg'), label: 'Momo' },
    { id: 2, source: require('../../images/pizza.jpg'), label: 'Pizza' },
    { id: 3, source: require('../../images/colddrinks.jpg'), label: 'Cold Drinks' },
    { id: 4, source: require('../../images/dessert.jpg'), label: 'Dessert' },
    { id: 5, source: require('../../images/nood.jpg'), label: 'Noodles' },
    { id: 6, source: require('../../images/soup.jpg'), label: 'Soup' },
    { id: 7, source: require('../../images/pasta.jpg'), label: 'Pasta' },
    { id: 8, source: require('../../images/fc.jpg'), label: 'Fried Chicken' },
  ]);

  const removeImage = (id) => {
    setImages(images.filter(image => image.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexbox}>
        <TouchableOpacity style={styles.logouticon} onPress={() => console.log('Logout icon pressed')}>
          <Image source={require('../../images/logout.png')} style={styles.logoutImage} />
        </TouchableOpacity>
        
        <View style={styles.user}>
          <Image source={require('../../images/user.png')} style={styles.usericon} />
        </View>
        
        <View style={styles.logoutbox}>
          <Text style={styles.admintext}>Admin</Text>
        </View>
      </View>
      <View style={styles.searchcontainer}>
        <Image source={require('../../images/search.png')} style={styles.searchicon} />
        <TextInput
          placeholder='Search'
          style={styles.searchbox}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.headtext}>CATEGORIES</Text>
      </View>
      <View style={styles.horizontalline}/>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.catButton}>
          <Text style={styles.buttonText}>Add Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catButton2} onPress={() => setIsEditMode(!isEditMode)}>
          <Text style={styles.buttonText}>Edit Categories</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.imageContainer}>
        <View style={styles.row}>
          {images.slice(0, 4).map(image => (
            <View style={styles.cardWrapper} key={image.id}>
              <TouchableOpacity style={[styles.card, isEditMode && styles.cardEdit]}>
                <Image source={image.source} style={styles.cardImage} />
                <Text style={styles.imageText}>{image.label}</Text>
                {isEditMode && (
                  <TouchableOpacity style={styles.removeIcon} onPress={() => removeImage(image.id)}>
                    <Text style={styles.removeText}>X</Text>
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {images.slice(4).map(image => (
            <View style={styles.cardWrapper} key={image.id}>
              <TouchableOpacity style={[styles.card, isEditMode && styles.cardEdit]}>
                <Image source={image.source} style={styles.cardImage} />
                <Text style={styles.imageText}>{image.label}</Text>
                {isEditMode && (
                  <TouchableOpacity style={styles.removeIcon} onPress={() => removeImage(image.id)}>
                    <Text style={styles.removeText}>X</Text>
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
  admintext: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  logoutbox: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logouticon: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutImage: {
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
  searchcontainer: {
    backgroundColor: 'white',
    top: 80,
    padding: 10,
    height: 60,
    borderRadius: 30,
    width: '80%',
    left: 40,
    elevation: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchicon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  searchbox: {
    flex: 1,
  },
  catButton: {
    backgroundColor: '#f57842',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
  },
  catButton2: {
    backgroundColor: '#f7e51b',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  header: {
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 100,
  },
  headtext: {
    color: '#f57842',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    marginTop: 20,
    gap: 15,
  },
  imageContainer: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cardWrapper: {
    width: '23%',
  },
  card: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardEdit: {
    transform: [{ translateY: -10 }],
  },
  cardImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  imageText: {
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  removeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#f57842',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  horizontalline: {
    borderBottomColor: 'black',
    borderBottomWidth: .5,
    marginVertical: 10,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    left: 100,
  },
});
