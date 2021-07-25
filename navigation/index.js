import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './auth';
import TabNavigator from './tab'
import { useSelector } from 'react-redux';

export default () =>{
    const loggedIn = useSelector(state => state.auth.token)

    return(
        <NavigationContainer>
            {
            loggedIn
            ? <TabNavigator /> 
            : <AuthNavigator />
            }
        </NavigationContainer>
    )
}
