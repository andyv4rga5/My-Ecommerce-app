import {View, Text, StyleSheet} from 'react-native'

const ProductsByCategoryScreen = () =>{
    return(
        <View style={styles.container}>
            <Text>Productos por Categoria</Text>
        </View>
    )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,

    }    
})