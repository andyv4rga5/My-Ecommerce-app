import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from '../components/Headers'
import categories_data from '../data/categories_data.json'

const CategoriesScreen = () => {
    return (
        <>
        <Header title="Categorias"/>
        <FlatList
            data={categories_data}
            renderItem={renderCategoryItem}

        ></FlatList>
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({

})