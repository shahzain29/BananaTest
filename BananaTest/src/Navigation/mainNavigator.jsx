import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import userList from '../Screens/userList'

const Stack = createStackNavigator();

const mainNavigator = () => {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='userList' component={userList} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default mainNavigator

const styles = StyleSheet.create({})