import React, { useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ThemeContext } from './../theme/theme-context';

const formatDate = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const sumTotal = list => list
    .map(item => item.quantity * item.price)
    .reduce((a, b) => a + b, 0)


const OrderItem = ({ item, onDelete }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.order, {backgroundColor: theme.backgroundCard }]}>
            <View style={styles.data}>
                <View style={styles.dateItems}>
                    <Text style={[styles.text, {color: theme.color}]}>{formatDate(item.date)}</Text>
                    <Text style={[styles.text, {color: theme.color}]}>${sumTotal(item.items)}</Text>
                </View>
                <Text style={[styles.text, {color: theme.color}]}>{item.address}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.button}>
                    <Ionicons size={24} color="red" name="md-trash" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    order: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    data: {
        flexDirection: 'column',
        width: '85%',
        justifyContent: 'space-evenly',
        alignContent: 'space-between',
        height: 200,
    },
    dateItems: {
        width: '100%'
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
    text: {
        fontFamily: 'poppins-regular'
    }
})

export default OrderItem;