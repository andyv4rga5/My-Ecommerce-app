import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from '../components/Headers'
import categories_data from '../data/categories_data.json'

const renderCategoryItem = ({item})=> (
    <Text>{item}</Text>
)

const CategoriesScreen = () => {
    return (
        <>
        <Header title="Categorias"/>
        <FlatList
            data={categories_data}
            renderItem={renderCategoryItem}
            keyExtractor={item => item}
        />
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({

})