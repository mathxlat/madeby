import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Alert } from 'react-native'
import * as Location from 'expo-location';
import MapPreview from './MapPreview';
import ButtonStyled from './ButtonStyled';
import Colors from '../constants/Colors';


const LocationPicker = ({ navigation, addAddress }) => {
    const [isFetching, setIsFetching] = useState(false)
    const [pickedLocation, setPickedLocation] = useState()

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                Alert.alert(
                    'Permisos insuficientes',
                    'Necesita dar permisos de localización para la app',
                    [{ text: 'Ok' }],
                )
            }
        })();
    }, [])

    const getLocationHandler = async () => {
        try{
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000,
            });
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            })
        } catch (err) { 
            Alert.alert(
                'No se pudo obtener la localización',
                'Por favor intente nuevamente.',
                [{ text: 'Ok'}]
            )
        } finally {
            setIsFetching(false);
        }
    }

    const onConfirmHandler = () => {
        addAddress(pickedLocation)
        navigation.goBack();
    }

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation}>
                {
                    isFetching ?
                    <ActivityIndicator size="large" color='black' />
                    : <Text>En proceso..</Text>
                }
            </MapPreview>
            {
                pickedLocation
                ? null :
                <ButtonStyled 
                    onPress={getLocationHandler} 
                    backgroundColor="black"
                    text="Ubicación actual"
                    textColor="white"
                />
            }
            <View>
                {
                    pickedLocation 
                    && 
                    <ButtonStyled 
                        onPress={onConfirmHandler} 
                        backgroundColor={Colors.primary}
                        text="Confirmar"
                        textColor="white"
                    />
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    locationPicker: {
        marginVertical: 15,
        alignItems: 'center',
    },
    mapPreview: {
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        width:  '80%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default LocationPicker;