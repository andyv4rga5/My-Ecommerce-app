import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Headers'

const CategoriesScreen = (title) => {
    return (
        <>
        <Header title="Categorias"/>
            <View style={styles.containers}>
                <Text>Lista de Categorias</Text>
            </View>
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    
})