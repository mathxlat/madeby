import React from 'react'
import { StyleSheet, View, FlatList, Dimensions} from 'react-native'
import CardCategory from '../components/CardCategory'
import {CATEGORIES} from '../services/categories';
import CarouselCards from '../carousel/CarouselCards';

const HomeScreen = ({ navigation }) => {
    console.log(CATEGORIES)
    const handleSelected = item => {
        navigation.navigate('Category', {
            categoryID: item.id,
            name: item.name,
            description: item.description,
            image: item.image
        })
    }
    const renderItem = ({ item }) => <CardCategory item={item} onSelected={handleSelected} />

    return (
        <>
            <CarouselCards />
            <View style={styles.containerCategories}>
                <FlatList 
                    data={CATEGORIES}
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