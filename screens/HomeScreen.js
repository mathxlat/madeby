import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, FlatList, Dimensions} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
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

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item 
                        title="Guardados"
                        iconName="bookmarks-outline"
                        onPress={() => navigation.push('Saves')}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation])
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item 
                        title="Opciones"
                        iconName="options-outline"
                        onPress={() => navigation.push('Options')}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation])

    return (
            <View style={styles.containerCategories}>
                <FlatList 
                    ListHeaderComponent={ <CarouselCards onSelected={handleSelected} /> }
                    data={productCategories}
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
    containerCategories:{
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreen;