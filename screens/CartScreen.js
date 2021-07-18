import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../store/actions/cart.action'
import CartItem from '../components/CartItem'
import { confirmCart } from '../store/actions/cart.action'

const CartScreen = () => {
    const dispatch = useDispatch();

    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const handleDeleteItem = id => dispatch(deleteItem(id))
    const handleConfirmCart = () => dispatch(confirmCart(items))

    const renderItem = data => <CartItem item={data.item} onDelete={handleDeleteItem} />

    return (
        <>
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList 
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
            <Button title="Confirmar" onPress={handleConfirmCart} />
            <View style={styles.total}>
                <Text>Total</Text>
                <Text>${total}</Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})

export default CartScreen;