import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const DetailScreen = ({ route }) => {
    const { params } = route;
    const { item } = params;
    return (
        <View style={styles.itemContainer}>
            <Text>Detalle del producto</Text>
            <View style={styles.itemContainerAll}>
                <View style={styles.itemContainerNameProducer}>
                    <Text style={styles.itemNameText}>{item.itemName}</Text>
                    <Text style={styles.itemProducerText}>{item.itemProducer}</Text>
                </View>
                <View style={styles.itemContainerDetail}>
                    <Text style={styles.itemDetailText}>{item.itemDetail}</Text>
                </View>
                <View style={styles.itemContainerPrice}>
                    <Text style={styles.itemPriceTotalText}>Precio Total</Text>
                    <Text style={styles.itemPriceText}>${item.itemPrice}</Text>
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
        marginTop: 20,
        marginVertical: 15,
        marginHorizontal: 15
    },
    itemContainerNameProducer:{
        marginVertical: 15
    },
    itemContainerDetail: {
        marginVertical: 15
    },
    itemContainerPrice:{
        marginVertical: 15
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
    }

})

export default DetailScreen;