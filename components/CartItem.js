import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'

const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.containerCartItem}>
            <View>
                <Text>
                    {item.name}
                </Text>
            </View>
            <View>
                <Text>
                    Cantidad: {item.quantity}
                </Text>
            </View>
            <View>
                <Text>
                    ${item.price}
                </Text>
            </View>
            <Button title="X" onPress={()=> onDelete(item.id)} />
        </View>
    )
}


const styles = StyleSheet.create({
    containerCartItem:{
        width: Dimensions.get('window').width - 50,
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5
    }
})

export default CartItem;