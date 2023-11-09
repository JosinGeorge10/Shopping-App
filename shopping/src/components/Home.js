import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
//images Icons
import Toggle from '../assets/icons/toggle.svg';
import Search from '../assets/icons/search.svg';
import Cart from '../assets/icons/cart.svg';

const Home = () => {
  const detailData = [
    {
      id: 1,
      name: 'coktail dress',
      price: '178.99',
      image: require('../assets/images/girl1.png'),
    },
    {
      id: 2,
      name: 'coktail dress',
      price: '178.99',
      image: require('../assets/images/girl2.png'),
    },
    {
      id: 3,

      name: 'coktail dress',
      price: '178.99',
      image: require('../assets/images/girl1.png'),
    },
    {
      id: 4,
      name: 'coktail dress',
      price: '178.99',
      image: require('../assets/images/girl1.png'),
    },
    {
      id: 5,
      name: 'coktail dress',
      price: '178.99',
      image: require('../assets/images/girl1.png'),
    },
    {
      id: 6,

      name: 'coktail dress',
      price: '178.99',
      image: require('../assets/images/girl1.png'),
    },
    {
      id: 7,

      name: 'coktail dress',
      price: '178.99',
      image: require('../assets/images/girl1.png'),
      background: '#3ecd7a',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.leftToggleContainer}>
          <Toggle height={30} width={30} />
        </View>
        <View style={styles.rightToggleContainer}>
          <View>
            <Search height={30} width={30} />
          </View>
          <View style={styles.cartContainer}>
            <Cart height={30} width={30} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 20, marginLeft: 20}}>
        <View>
          <Text style={{fontWeight: '600', fontSize: 20, color: '#000'}}>
            Find your Style
          </Text>
        </View>
        <View style={{alignItems: 'flex-end', width: '38%'}}>
          <Image
            style={styles.mainImage}
            source={require('../assets/icons/downImage.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <TouchableOpacity activeOpacity={0.8} style={styles.allDetails}>
          <Text style={styles.detailText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.allDetails}>
          <Text style={styles.detailText}>Winter</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.allDetailsTwo}>
          <Text style={styles.detailText2}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.allDetails}>
          <Text style={styles.detailText}>Eyewear</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {detailData.map(item => (
