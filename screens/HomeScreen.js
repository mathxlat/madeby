import React from 'react'
import { StyleSheet, View, FlatList, Dimensions} from 'react-native'
import CardItem from '../components/CardItem'
import { CATEGORIES } from '../services/categories';
import CarouselCards from '../carousel/CarouselCards';

const HomeScreen = ({ navigation }) => {
    const handleSelected = item => {
        navigation.navigate('Category', {
            categoryID: item.id,
            name: item.name,
            description: item.description,
            image: item.image
        })
    }
    const renderItem = ({ item }) => <CardItem item={item} onSelected={handleSelected} />

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