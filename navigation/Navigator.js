import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailScreen from '../screens/DetailScreen';

import { ThemeContext } from '../theme/theme-context';

const Stack = createStackNavigator();

const customTrasition = {
    gestureEnabled: true,
    gestureDirection: 'vertical',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec
    },
    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
}

const Navigator = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <NavigationContainer>
            <Stack.Navigator 
            initalRouteName="Home" 
            mode="modal"
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
                ...customTrasition
            }}>

                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{
                    title: 'madeby',
                    }}
                />

                <Stack.Screen 
                    name="Category" 
                    component={CategoryScreen} 
                    options={({ route })=>({ 
                    title: route.params.name,
                    })}
                />

                <Stack.Screen 
                    name="Detail" 
                    component={DetailScreen} 
                    options={({ route })=>({ 
                    title: route.params.name,
                    })}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;