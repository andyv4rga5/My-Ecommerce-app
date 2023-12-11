import { Text, View, StyleSheet } from 'react-native'
import Card from './Card'

const CategoryItem = ({category}) => {
    return (
        <Card>
            <Text>{category}</Text>
        </Card>
    )
}

export default CategoryItem

const styles = StyleSheet.create({

})