import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

import ShopNavigator from '../shop'
import CartNavigator from '../cart'
import OrdersNavigator from '../orders'

const TabStack = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <TabStack.Navigator
            initialRouteName="Shop"
            tabBarOptions={{
                showLabel: false,
                style: {
                    ...styles.tabBar,
                    ...styles.shadow,
                }
            }}
        >
            <TabStack.Screen 
                name="Shop" 
                component={ShopNavigator} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <Ionicons name={focused ? "md-home" : "md-home-outline"} color={focused ? Colors.primary : "#ccc"} size={focused ? 26 : 22} />
                            <Text style={{ color: focused ? Colors.primary : "#ccc", fontFamily: focused ? "poppins-medium" : "poppins-light"}}>
                                Home
                            </Text>
                        </View>
                    )
                }}
            />
            <TabStack.Screen 
                name="Cart" 
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <Ionicons name={focused ? "md-cart" : "md-cart-outline"} color={focused ? Colors.primary  : "#ccc"} size={focused ? 26 : 22} />
                            <Text style={{ color: focused ? Colors.primary : "#ccc", fontFamily: focused ? "poppins-medium" : "poppins-light"}}>
                                Cart
                            </Text>
                        </View>
                    )
                }}
            />
            <TabStack.Screen 
                name="Orders" 
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <Ionicons name={focused ? "md-list" : "md-list-outline"} color={focused ? Colors.primary  : "#ccc"} size={focused ? 26 : 22} />
                            <Text style={{ color: focused ? Colors.primary : "#ccc", fontFamily: focused ? "poppins-medium" : "poppins-light"}}>
                                Orders
                            </Text>
                        </View>
                    )
                }}
            />
        </TabStack.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        height: 70,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default TabNavigator;
