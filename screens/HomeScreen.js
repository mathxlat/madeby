import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Dimensions} from 'react-native'
import CardCategory from '../components/CardCategory'
import data from '../services/database';

const HomeScreen = ({ navigation }) => {
    const [categories, setCategories] = useState(data);
    useEffect(() =>{
        setCategories(data);
    }, [data])
    return (
        <View style={styles.containerCategories}>
            <FlatList 
                data={categories}
                renderItem={categories => <CardCategory categories={categories} navigation={navigation} />}
                keyExtractor={(category => category.categoryID)}
            />
        </View>
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