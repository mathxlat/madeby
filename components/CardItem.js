import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Card from './Card'

const CardItem = ({items, navigation}) => {
    const { item } = items;
    return (
        <Card onPress={()=>{
            navigation.navigate('Detail', {
                item: item
            })
            }}>
            <View style={styles.containerCardItem}>
                <Image style={styles.image} source={{uri: item.itemImage}} />
                <View style={styles.containerText}>
                    <View style={styles.containerTextNameProducer}>
                        <Text style={styles.textItemName}>{item.itemName}</Text>
                        <Text style={styles.textItemProducer}>{item.itemProducer}</Text>
                    </View>
                    <Text style={styles.textItemDetail}>{item.itemDetail}</Text>
                </View>
            </View>
        </Card>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 30
    }, 
    containerCardItem: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerText:{
        padding: 15,
        width: '55%'
    },
    containerTextNameProducer: {
        paddingBottom: 15
    },
    textItemName: {
        fontFamily: 'poppins-medium',
        fontSize: 18,
        lineHeight: 22
    }, 
    textItemProducer:{
        fontFamily: 'poppins-light',
        fontSize: 14,
        lineHeight: 16
    },
    textItemDetail:{
        fontFamily: 'poppins-regular',
        fontSize: 12,
        color: '#777777'
    }
})

export default CardItem;