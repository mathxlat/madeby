import React, { useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import OrderItem from '../components/OrderItem'
import { getOrders, deleteOrder } from './../store/actions/order.action';

const OrdersScreen = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const orders = useSelector(state => state.orders.items);
    const cart = useSelector(state => state.cart)
    useEffect(()=>{
        dispatch(getOrders(user))
    },[cart])


    const onDeleteHandler = (id) => {
        dispatch(deleteOrder(id))
    }

    const renderItem = (data) => (
        <OrderItem onDelete={onDeleteHandler} item={data.item} />
    )
        
    return (
        <View style={styles.container}>
            {(orders[0]) ? (
            <FlatList 
                data={orders}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />) : (
            <View style={styles.containerEmpty}>
                <Text style={styles.textEmpty}>
                    ¡Todavia no hiciste ninguna orden!
                </Text>
            </View>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    containerEmpty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginBottom: 20
    },  
    textEmpty: {
        fontFamily: 'poppins-regular',
        fontSize: 22,
        textAlign: 'center'
    },
})

export default OrdersScreen;