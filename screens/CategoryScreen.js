import React from 'react'
import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
import CardItem from '../components/CardItem'
import { PRODUCTOS } from '../services/productos'

const CategoryScreen = ({ route, navigation }) => {
    const handleSelected = item => {
        navigation.navigate('Detail', {
            item,
            name: item.name,
        })
    }
    const data = PRODUCTOS.filter(item => item.category === route.params.categoryID)
    const renderItem = ({item}) => <CardItem item={item} onSelected={handleSelected} />
    return (
        <View style={styles.containerItems}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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