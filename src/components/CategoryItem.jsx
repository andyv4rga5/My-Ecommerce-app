import { Text, View, StyleSheet } from 'react-native'
import Card from './Card'

const CategoryItem = ({ category }) => {
    return (
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "aqua",
        marginHorizontal: 5,
        marginVertical: 4,
        paddingVertical: 30,
        paddingleft: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 15,
    }
})