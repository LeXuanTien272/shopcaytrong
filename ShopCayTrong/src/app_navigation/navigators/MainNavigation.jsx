import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HomeScreen from '../main_navigation/HomeScreen';
import SearchScreen from '../main_navigation/SearchScreen';
import BellScreen from '../main_navigation/BellScreen';
import UserProfileScreen from '../main_navigation/UserProfileScreen';
import DetailProductScreen from '../main_navigation/DetailProductScreen';
import CateProductScreen from '../main_navigation/CateProductScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../main_navigation/CartScreen';
import EditUserScreen from '../main_navigation/EditUserScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigation = () => {

    const MainTab = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Home') {
                            return <Image source={require('../../resources/images/home_inactive.png')} />;
                        } else if (route.name === 'Search') {
                            return <Image source={require('../../resources/images/search_inactive.png')} />;
                        } else if (route.name === 'Bell') {
                            return <Image source={require('../../resources/images/bell_inactive.png')} />;
                        } else if (route.name === 'User') {
                            return <Image source={require('../../resources/images/user_inactive.png')} />;
                        }
                    },
                    // tabBarActiveTintColor: '#D17842',
                    //   tabBarInactiveTintColor: '#4E5053',
                    tabBarShowLabel: false,
                    headerShown: false
                })}

            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Bell" component={BellScreen} />
                <Tab.Screen name="User" component={UserProfileScreen} />
            </Tab.Navigator>
        )
    };

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="Detail" component={DetailProductScreen} />
            <Stack.Screen name="TypeTree1" component={CateProductScreen} />
            <Stack.Screen name="UpdateProfile" component={UserProfileScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="EditUser" component={EditUserScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})