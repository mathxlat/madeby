import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeContext } from '../theme/theme-context'

const ChangeTheme = () => {
    const { dark, toggle } = useContext(ThemeContext);
    return (
    <View style={styles.containerSwitch}>
        <Switch 
            trackColor={{ false: '#767577', true: '#ccc' }}
            thumbColor={ dark ? '#fff' : '#f4f3f4' }
            onChange={toggle}
            value={dark}
        />
    </View>
    )
}


const styles = StyleSheet.create({
    containerSwitch: {
        marginBottom: 50,
    },
})

export default ChangeTheme;
