import { View, StyleSheet } from 'react-native'

const Card = ({children, style}) => {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        shadowColor: '#C0C0C0',
        shadowOffset: {
            height: 5,
            width: 3
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})