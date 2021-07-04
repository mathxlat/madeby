import React from 'react'
import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
import CardItem from '../components/CardItem'

const CategoryScreen = ({ route, navigation }) => {
    const { params } = route;
    const { category, items } = params;
    return (
        <View style={styles.containerItems}>
            <FlatList 
                data={items}
                renderItem={item => <CardItem items={item} navigation={navigation} />}
                keyExtractor={item => item.itemID}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerItems:{
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center'
    }
})

export default CategoryScreen;