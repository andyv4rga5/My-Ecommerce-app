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
        backgroundColor: "#EBEBEB",
        padding: 10,
        margin: 10,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 17,
    }
})