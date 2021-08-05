import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const formatDate = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const sumTotal = list => list
    .map(item => item.quantity * item.price)
    .reduce((a, b) => a + b, 0)


const OrderItem = ({ item, onDelete }) => {
    return (
        <View style={styles.order}>
            <View style={styles.data}>
                <View style={styles.dateItems}>
                    <Text>{formatDate(item.date)}</Text>
                    <Text>${sumTotal(item.items)}</Text>
                </View>
                <Text>{item.address}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.button}>
                    <Ionicons size={16} color="red" name="md-trash" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    order: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        height: 80,
        paddingBottom: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    data: {
        flexDirection: 'column',
        width: '80%',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        height: 70,
    },
    dateItems: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        justifyContent: 'space-between',
        width: '50%',
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 60,
    },
    button: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
})

export default OrderItem;