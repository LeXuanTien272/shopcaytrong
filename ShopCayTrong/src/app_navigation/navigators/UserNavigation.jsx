import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../user_navigation/LoginScreen';
import RegisterScreen from '../user_navigation/RegisterScreen';
import Welcome from '../user_navigation/Welcome';


const Stack = createNativeStackNavigator();
const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Regis" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default UserNavigation

const styles = StyleSheet.create({})