import {View, Text, StyleSheet} from 'react-native'

const ProductDetailScreen = () =>{
    return(
        <View style={styles.containers}>
            <Text>Detalles del Producto</Text>
        </View>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    }    
})