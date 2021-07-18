import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, Dimensions } from 'react-native'
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
        <View style={styles.containerCart}>
            <View style={styles.containerList}>
                <View style={styles.list}>
                    <FlatList 
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        />
                </View>
            </View>
            <View style={styles.containerTotalConfirm}>
                <View style={styles.total}>
                    <Text style={styles.textTotal}>Total</Text>
                    <Text>${total}</Text>
                </View>
                <Button title="Confirmar" onPress={handleConfirmCart} />
            </View>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    containerCart: {
        flex: 1,
        alignItems: 'center',
    },
    containerList: {
        flex: 1,
        alignItems: 'center',
    },
    containerTotalConfirm:{
        marginBottom: 50,
        width: Dimensions.get('window').width - 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    total: {
        alignSelf: 'flex-start',
        marginVertical: 20,
        borderTopWidth: 1,
        width: Dimensions.get('window').width - 50,
    },
    textTotal: {
        fontSize: 30,
        fontFamily: 'poppins-regular',
        marginBottom: -10,
    }
})

export default CartScreen;