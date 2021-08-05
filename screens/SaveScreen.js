import React, { useEffect} from 'react'
import { StyleSheet, View, FlatList, Text, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../components/CardItem'
import { loadSaves } from '../store/actions/saves.action'
import { selectProduct } from '../store/actions/product.action'


const SaveScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const saves = useSelector(state => state.saves.saves);

    useEffect(() => {
        dispatch(loadSaves())
    }, [saves])

    const handleSelected = item => {
        dispatch(selectProduct(item.itemId))
        navigation.navigate('Detail', {name: item.name,})
    }

    const renderItem = ({ item }) => <CardItem item={item} onSelected={handleSelected} />
    return (
        <View style={styles.containerItems}>
            {(saves[0]) ? (
            <FlatList 
                data={saves}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    paddingVertical: 10
                }}
            /> ) : (
            <View style={styles.containerEmpty}>
                <Text style={styles.textEmpty}>
                    ¡No tienes productos guardados!
                </Text>
            </View>
            )}
        </View>
    )
}

export default SaveScreen;

const styles = StyleSheet.create({
    containerItems:{
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center'
    },
    containerEmpty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginBottom: 20
    },  
    textEmpty: {
        fontFamily: 'poppins-regular',
        fontSize: 22,
        textAlign: 'center'
    },
})
