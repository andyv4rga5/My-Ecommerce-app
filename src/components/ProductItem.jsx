import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { setProductIdSelected, setProductSelected } from '../features/shopSlice'

const ProductItem = ({ product, navigation }) => {
    const dispatch = useDispatch()
    return (
        <View>
            <TouchableOpacity onPress={() => {
                dispatch(setProductIdSelected(product.id))
                dispatch(setProductSelected())
                navigation.navigate("Detalle", product.id)
            }
            } style={styles.containerProductItem}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Image
                    style={styles.productImage}
                    reSizeMode='cover'
                    source={{ uri: product.thumbnail }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({

    containerProductItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10
    },
    productTitle: {

    },
    productImage: {
        width: 60,
        height: 60
    }
})