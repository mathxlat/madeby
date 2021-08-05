import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { addAddress } from './../store/actions/address.actions';
import LocationPicker from '../components/LocationPicker'

const MapScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const onHandlerAddAddress = location => dispatch(addAddress(location))

    return (
        <View>
            <LocationPicker navigation={navigation} addAddress={onHandlerAddAddress} />
        </View>
    )
}


const styles = StyleSheet.create({})

export default MapScreen;