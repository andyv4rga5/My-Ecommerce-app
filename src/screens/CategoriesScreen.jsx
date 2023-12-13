import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from '../components/Headers'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'


const CategoriesScreen = ({onSelectCategoryEvent}) => {
    
    const renderCategoryItem = ({ item }) => (
        <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent}/>
    )

    return (
        <>
            <Header title="CATEGORIAS" />
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