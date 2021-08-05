import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../store/actions/cart.action'
import CartItem from '../components/CartItem'
import { confirmCart } from '../store/actions/cart.action'
import Colors from '../constants/Colors'
import ButtonStyled from '../components/ButtonStyled'

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
    const user = useSelector(state => state.auth.user);
    const address = useSelector(state => state.address.address);

    const handleDeleteItem = id => dispatch(deleteItem(id))
    const handleConfirmCart = () => dispatch(confirmCart(items, user, address))

    const handleConfigureEnv = () => navigation.push('Location')

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
                {
                    address ? null : 
                    <ButtonStyled 
                        onPress={handleConfigureEnv} 
                        backgroundColor={Colors.primary}
                        text="Configurar envío"
                        textColor='white'
                    />
                }
                {
                    address &&
                    <ButtonStyled 
                        onPress={handleConfirmCart} 
                        backgroundColor={Colors.primary}
                        text="Confirmar"
                        textColor='white'
                    />
                }
            </View>
        </View>) : (
            <View style={styles.containerEmpty}>
                <Text style={styles.textEmpty}>
                    ¡Tu carrito está vacío!
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
})

export default CartScreen;