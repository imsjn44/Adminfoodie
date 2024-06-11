import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const Add = () => {
  const [ImageData, SetImageData] = useState(null);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        openGallery()
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });
    if (result.didCancel) {
      
    } 
    else {
      console.log(result);
      SetImageData(result);
     }


  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Add item</Text>
      </View>

      {ImageData !== null ? (
        <Image 
          source={{ uri: ImageData.uri }}
          style={styles.imagestyle}
        />
      ) : null}

      <View style={styles.c1}>
        <TextInput
          placeholder="Enter New Item"
          style={styles.textinput}
        />
        <TextInput
          placeholder="Enter Item Price"
          style={styles.textinput}
        />
        <TextInput
          placeholder="Enter Item Discount Price"
          style={styles.textinput}
        />
        <TextInput
          placeholder="Enter Item Description"
          style={styles.textinput2}
        />
        <TextInput
          placeholder="Enter Item Image URL"
          style={styles.textinput}
        />
        <Text style={{ alignSelf: 'center', marginTop: 20 }}>OR</Text>

        <TouchableOpacity
          style={styles.pickbtn}
          onPress={requestCameraPermission}>
          <Text style={styles.pickbtntext}>Select Image From Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pickbtn1}>
          <Text style={styles.pickbtntext}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#f57842',
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textinput: {
    width: '90%',
    height: 50,
    color: 'black',
    borderRadius: 20,
    borderWidth: 0.5,
    paddingLeft: 10,
    paddingRight: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  textinput2: {
    width: '90%',
    height: 60,
    borderRadius: 20,
    borderWidth: 0.5,
    paddingLeft: 10,
    paddingRight: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  c1: {
    gap: 10,
  },
  pickbtn: {
    backgroundColor: '#f57842',
    width: '90%',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    elevation: 5,
  },
  pickbtntext: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'black',
  },
  pickbtn1: {
    backgroundColor: '#f7e51b',
    width: '90%',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  imagestyle: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
});
