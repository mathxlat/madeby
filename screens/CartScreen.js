import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../store/actions/cart.action'
import CartItem from '../components/CartItem'
import { confirmCart } from '../store/actions/cart.action'
import Colors from '../constants/Colors'

const CartScreen = () => {
    const dispatch = useDispatch();

    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
    const user = useSelector(state => state.auth.user);

    const handleDeleteItem = id => dispatch(deleteItem(id))
    const handleConfirmCart = () => dispatch(confirmCart(items, user))

    const renderItem = data => <CartItem item={data.item} onDelete={handleDeleteItem} />

    return (
        (items[0]) ? (
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
                <TouchableOpacity style={styles.btnConfirmCart} onPress={handleConfirmCart}>
                    <Text style={styles.btnTextConfirmCart}>
                        Confirmar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>) : (
            <View style={styles.containerCartEmpty}>
                <Text style={styles.textCartEmpty}>
                    Tu carrito está vacio, agrega un producto y vuelve.
                </Text>
            </View>
        )
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
    containerTotalConfirm: {
        marginBottom: 100,
        width: Dimensions.get('window').width - 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerCartEmpty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },  
    textCartEmpty: {
        fontFamily: 'poppins-regular',
        fontSize: 22
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
    },
    btnConfirmCart:{
        paddingVertical: 11,
        paddingHorizontal: 30,
        borderRadius: 30,
        backgroundColor: '#8855FF'
    },
    btnTextConfirmCart: {
        fontSize: 16,
        fontFamily: 'poppins-medium',
        color: '#ffffff'
    }
})

export default CartScreen;