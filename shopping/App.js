import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignUp from './src/components/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/components/Home';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView>
    //   <SignUp />
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
