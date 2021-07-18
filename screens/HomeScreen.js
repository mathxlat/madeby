import React from 'react'
import { StyleSheet, View, FlatList, Dimensions} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import CardItem from '../components/CardItem'
import CarouselCards from '../carousel/CarouselCards';
import { selectCategory } from '../store/actions/category.action';


const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const productCategories = useSelector(state => state.categories.categories)
    const handleSelected = item => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Category', {name: item.name})
    }
    const renderItem = ({ item }) => <CardItem item={item} onSelected={handleSelected} />

    return (
        <>
            <CarouselCards />
            <View style={styles.containerCategories}>
                <FlatList 
                    data={productCategories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerCategories:{
        flex: 1,
        alignItems: 'center',
        width: Dimensions.get('window').width
    }
})

export default HomeScreen;