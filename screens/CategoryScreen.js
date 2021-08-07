import React, { useEffect } from 'react'
import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import CardItem from '../components/CardItem'
import { filterProduct, selectProduct } from '../store/actions/product.action'

const CategoryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const categoriesProducts = useSelector(state => state.products.filteredProducts);
    const category = useSelector(state => state.categories.selected);

    useEffect(() =>{
        dispatch(filterProduct(category.id))
    }, [])


    const handleSelected = item => {
        dispatch(selectProduct(item.id))
        navigation.navigate('Detail', {name: item.name,})
    }
    const renderItem = ({item}) => <CardItem item={item} onSelected={handleSelected} />
    return (
        <View style={styles.containerItems}>
            <FlatList 
                data={categoriesProducts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    paddingVertical: 10,
                    paddingBottom: 100
                }}
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