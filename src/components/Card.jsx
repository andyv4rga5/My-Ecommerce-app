import { View, StyleSheet } from 'react-native'

const Card = (children) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        shadowColor: '#C0C0C0',
        shadowOffset: {
            width: 3,
            height: 5
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})