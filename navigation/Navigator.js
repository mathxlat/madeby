import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailScreen from '../screens/DetailScreen';

import { ThemeContext } from '../theme/theme-context';

const Stack = createStackNavigator();

const Navigator = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <NavigationContainer>
            <Stack.Navigator 
            initalRouteName="Home" 
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? theme.backgroundColor : '',
                    elevation: 8,
                    shadowOpacity: 0.48,
                },
                headerTitleStyle: {
                    fontFamily: 'poppins-regular',
                    fontSize: 18,
                },
                headerTintColor: Platform.OS === 'android' ? theme.color : 'white' ,
                headerTitleAlign: 'center',
            }} 
            >
                <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{title: 'madeby'}}
                />
                <Stack.Screen 
                name="Category" 
                component={CategoryScreen} 
                options={({ route })=>({ title: route.params.name })}
                />
                <Stack.Screen 
                name="Detail" 
                component={DetailScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;