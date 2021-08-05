import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const ButtonStyled = props => {
    return (
        <TouchableOpacity 
            {...props}
            onPress={props.onPress}
            style={[{...styles.button, ...props.style}, { backgroundColor: props.backgroundColor }]}
        >
            <Text style={[{...styles.text, ...props.styleText}, { color: props.textColor }]} >{props.text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
        paddingVertical: 11,
        paddingHorizontal: 30,
        borderRadius: 30,
        backgroundColor: Colors.primary,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'poppins-medium',
        color: '#ffffff'
    }
})  

export default ButtonStyled;