import React from 'react';
import AuthScreen from '../../screens/user/AuthScreen';
import { createStackNavigator } from '@react-navigation/stack';


const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
    <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
        }}
    >
        <AuthStack.Screen name="Login" component={AuthScreen} />
    </AuthStack.Navigator>
    )
}

export default AuthNavigator;