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
        shadowColor: '#252422',
        shadowOffset: {
            height: 7,
            width: 7
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})