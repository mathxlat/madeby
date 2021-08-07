import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Card from './Card'
import { ThemeContext } from './../theme/theme-context';

const CardItem = ({item, onSelected}) => {
    const { theme } = useContext(ThemeContext);
    let createdby = item.createdby 
    ? <Text style={[styles.textItemCreatedBy, {color:theme.color}]}>{item.createdby}</Text> 
    : null
    return (
        <Card onPress={() => onSelected(item)}>
            <View style={item.createdby ? styles.containerCardItem : styles.containerCardItemReverse }>
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.containerText}>
                    <View style={ item.createdby ? styles.containerTextNameCreated : null }>
                        <Text style={[styles.textItemName, {color: theme.color}]}>{item.name}</Text>
                        {createdby}
                    </View>
                    <Text style={[styles.textItemDescription, {color: theme.colorSecundary}]}>{item.description}</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerCardItemReverse: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerText:{
        padding: 15,
        width: '55%'
    },
    containerTextNameCreated: {
        paddingBottom: 15
    },
    textItemName: {
        fontFamily: 'poppins-medium',
        fontSize: 16,
        lineHeight: 22
    }, 
    textItemCreatedBy:{
        fontFamily: 'poppins-light',
        fontSize: 14,
        lineHeight: 16
    },
    textItemDescription:{
        fontFamily: 'poppins-regular',
        fontSize: 12,
        color: '#777777'
    }
})

export default CardItem;