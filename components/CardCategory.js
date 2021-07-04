import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Card from './Card'

const CardCategory = ({categories, navigation}) => {
    const { item } = categories;
    const image = item.categoryImage;
    return (
        <Card onPress={() => {
            navigation.navigate('Category', {
                category: item.categoryName,
                items: item.items
            });
        }}>
            <View style={styles.containerCardCategories}>
                <View style={styles.containerCardText}>
                    <Text style={styles.textName}>{item.categoryName}</Text>
                    <Text style={styles.textInfo}>{item.categoryInfo}</Text>
                </View>
                <Image style={styles.image} source={{uri: image}} />
            </View>
        </Card>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 25
    }, 
    image: {
        width: 150,
        height: 150,
        borderRadius: 25
    }, 
    containerCardCategories: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerCardText:{
        paddingLeft: 10,
        width: '50%'
    },
    textName: {
        fontFamily: 'poppins-medium',
        fontSize: 16
    },
    textInfo: {
        fontFamily: 'poppins-regular',
        fontSize: 12,
        color: '#777777'
    }
})

export default CardCategory;