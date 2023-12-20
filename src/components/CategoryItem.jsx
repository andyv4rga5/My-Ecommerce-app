import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'

const CategoryItem = ({ category, onSelectCategoryEvent }) => {
    return (
        <>
            <TouchableOpacity onPress={() => onSelectCategoryEvent(category)}>
                <Card style={styles.cardContainer}>
                    <Text style={styles.text}>{category}</Text>
                </Card>
            </TouchableOpacity>
        </>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.secondary,
        padding: 10,
        margin: 10,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 17,
    }
})