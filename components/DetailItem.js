import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Button, TouchableOpacity } from 'react-native'

const DetailItem = ({ item, onAdd}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemContainerAll}>
                <View style={styles.itemImageContainer}>
                    <Image style={styles.itemImage} source={{ uri: item.image }}/>
                </View>
                <View style={styles.itemContainerNameProducer}>
                    <Text style={styles.itemNameText}>{item.name}</Text>
                    <Text style={styles.itemProducerText}>{item.createdby}</Text>
                </View>
                <View style={styles.itemContainerDetail}>
                    <Text style={styles.itemDetailText}>{item.description}</Text>
                </View>
                <View style={styles.itemContainerPrice}>
                    <View style={styles.itemPriceBuy}>
                        <Text style={styles.itemPriceTotalText}>Precio Total</Text>
                        <Text style={styles.itemPriceText}>${item.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.btnAddCart} onPress={onAdd} >
                        <Text style={styles.btnTextAddCart}>Agregar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        margin: 10,
        width: Dimensions.get('window').width
    },
    itemContainerAll:{
        flex: 1,
        marginVertical: 15,
        marginHorizontal: 15
    },
    itemImageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemImage:{
        width: Dimensions.get('window').width - 50,
        marginLeft: -20,
        height: 300,
        overflow: 'hidden'
    },
    itemContainerNameProducer:{
        marginVertical: 15
    },
    itemContainerDetail: {
        marginVertical: 15
    },
    itemContainerPrice:{
        marginVertical: 15,
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemNameText:{
        fontFamily: 'poppins-medium',
        fontSize: 24
    },
    itemProducerText:{
        fontFamily: 'poppins-light',
        fontSize: 16
    },
    itemDetailText: {
        fontFamily: 'poppins-regular',
        fontSize: 16,
        color: '#777777'
    },
    itemPriceTotalText:{
        fontFamily: 'poppins-medium',
        fontSize: 18,
        color: '#888888'
    },
    itemPriceText: {
        fontFamily: 'poppins-medium',
        fontSize: 20,
        color: '#333'
    },
    btnAddCart:{
        paddingVertical: 11,
        paddingHorizontal: 30,
        borderRadius: 30,
        backgroundColor: '#8855FF'
    },
    btnTextAddCart: {
        fontSize: 19,
        fontFamily: 'poppins-medium',
        color: '#ffffff'
    }
})

export default DetailItem;