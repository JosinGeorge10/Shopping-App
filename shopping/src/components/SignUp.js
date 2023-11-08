import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Arrow from '../assets/icons/arrowleft.svg';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topSection}>
        <View style={styles.imageContainer}>
          <Text
            style={[styles.bottomSubText, {transform: [{rotate: '345deg'}]}]}>
            Fastacy
          </Text>
          <Image
            style={styles.mainImage}
            source={require('../assets/images/First.png')}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={[styles.bottomSubText, {textAlign: 'right'}]}>
              Classy
            </Text>
         
      <View style={styles.bottomContainer}>
        <View style={styles.leftSection}>
          <Text style={styles.text}>Tops</Text>
          <Text style={styles.text}>Tshirts</Text>
          <Text style={styles.text}>Hoddies</Text>
          <Text style={styles.text}>126+ Categories </Text>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.buttonText}>Sign Up</Text>
            <View style={{transform: [{rotate: '180deg'}]}}>
              <Arrow height={20} width={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
  },
  topSection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    marginBottom: 80,
  },
  imageContainer: {
    width: 300,
    aspectRatio: '876/1054',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  bottomTextContainer: {
    position: 'absolute',
    left: 150,
    top: 270,
  },
  bottomSubText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  subImageContainer: {
    flexDirection: 'row',
  },
  starContainer: {aspectRatio: '30/30'},
  starImage: {width: '100%', height: '100%'},
  middleContainer: {
    width: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 50,
  },
  dotOne: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d9d9d9',
  },
  dotTwo: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  bottomContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
  },
  leftSection: {},
  rightSection: {
    alignSelf: 'flex-end',
  },
  text: {
    color: '#bebebe',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#000',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: 50,
    width: 120,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
  },
});

