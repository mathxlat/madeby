import React, { useContext } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { ThemeContext } from '../theme/theme-context';


const Card = ({ children, style = {}, onPress }) => {
    const { theme } = useContext(ThemeContext);
    return (    
        <TouchableOpacity
                onPress={onPress}
                style={[{...styles.containerCard, ...style}, { backgroundColor: theme.backgroundCard }]} >
            <>
                {children}
            </>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    containerCard: {
        width: Dimensions.get('window').width - 40,
        padding: 15,
        justifyContent: 'space-around',
        margin: 20,
        marginVertical: 10,
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