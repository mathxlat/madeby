import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { MAP_API_KEY } from './../services/map';

const MapPreview = ({location, style, children}) => {
    const loc = location || {}
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?
        center=${loc.lat},${loc.lng}
        &zoom=13
        &size=600x300
        &maptype=roadmap
        &markers=color:blue%7Clabel:S%7C${loc.lat},${loc.lng}
        &key=${MAP_API_KEY}`
    return (
        <View style={{ ...style.mapPreview, ...style }}>
            {location 
                ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
                : children
            }
        </View>
    )
}

export default MapPreview;

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: '100%'
    }
})
