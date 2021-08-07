import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthNavigator from './auth';
import TabNavigator from './tab'
import { useSelector } from 'react-redux';

import { ThemeContext } from './../theme/theme-context';

export default () =>{
    const loggedIn = useSelector(state => state.auth.token)
    const { theme } = useContext(ThemeContext);
    return(
        <NavigationContainer
        theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background:  theme.backgroundColor,
            },
        }}>
            {
            loggedIn
            ? <TabNavigator /> 
            : <AuthNavigator />
            }
        </NavigationContainer>
    )
}
