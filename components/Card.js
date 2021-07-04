import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import { ThemeContext } from '../theme/theme-context';


const Card = ({ children, style = {}, onPress }) => {
    const { theme } = useContext(ThemeContext);
    return (    
        <TouchableHighlight
                activeOpacity={0.7}
                underlayColor="#dddddd"
                onPress={onPress}
                style={[{...styles.containerCard, ...style}, { backgroundColor: theme.backgroundCard }]} >
            <>
                {children}
            </>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    containerCard: {
        width: Dimensions.get('window').width - 50,
        padding: 15,
        justifyContent: 'space-around',
        margin: 15,
        minHeight: 100,
        maxHeight: '100%',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
    },
    cardText:{
        padding: 20,
        margin: 5
    }
})

export default Card;