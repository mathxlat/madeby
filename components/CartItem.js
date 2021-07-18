import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.containerCartItem}>
            <View>
                <Image style={styles.image} source={{ uri: item.image }}/>
            </View>
            <View>
                <View>
                    <Text style={styles.textName}>
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
            </View>
            <TouchableOpacity onPress={()=> onDelete(item.id)}>
                <Ionicons name="close" size={32} color="red" />
            </TouchableOpacity>
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
    },
    image:{
        width: 115,
        height: 115,
        borderRadius: 5,
        marginVertical: 15
    },
    textName:{
        fontFamily: 'poppins-medium',
        fontSize: 16
    }
})

export default CartItem;