import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ChangeTheme from './../components/ChangeTheme';
import { ThemeContext } from './../theme/theme-context';

const OptionsScreen = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={styles.screen}>
            <View style={[styles.card, {borderBottomColor: theme.backgroundTab}]}>
                <Text style={{ fontFamily: 'poppins-medium', marginTop: 5, color: theme.color }}>MODO OSCURO</Text>
                <ChangeTheme/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    card: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginHorizontal: 5
    }
})

export default OptionsScreen;