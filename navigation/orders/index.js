import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../constants/Colors';

import OrdersScreen from '../../screens/OrdersScreen';

const OrdersStack = createStackNavigator()


const OrdersNavigator = () => {
    return (
        <OrdersStack.Navigator
        initialRouteName="Orders"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                elevation: 5,
                shadowOpacity: 0.28,
            },
            headerTitleStyle: {
                fontFamily: 'poppins-regular',
                fontSize: 18,
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
            headerTitleAlign: 'center',
        }} 
        >
            <OrdersStack.Screen 
            name="Orders"
            component={OrdersScreen}
            options={()=>({ 
                title: 'Ordenes',
            })}
            />
        </OrdersStack.Navigator>
    )
}

export default OrdersNavigator;