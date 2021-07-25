import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../../screens/CartScreen';

const CartStack = createStackNavigator()


const CartNavigator = () => {
    return (
        <CartStack.Navigator
        initialRouteName="Cart"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'black' : '',
                elevation: 5,
                shadowOpacity: 0.28,
            },
            headerTitleStyle: {
                fontFamily: 'poppins-regular',
                fontSize: 18,
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
            headerTitleAlign: 'center',
        }} 
        >
            <CartStack.Screen 
            name="Cart"
            component={CartScreen}
            />
        </CartStack.Navigator>
    )
}

export default CartNavigator;