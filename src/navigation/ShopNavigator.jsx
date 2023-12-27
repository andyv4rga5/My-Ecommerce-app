import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Headers";

//*******VISTAS*******/

import CategoriesScreen from '../screens/CategoriesScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'


const Stack = createNativeStackNavigator()

// const customHeaderOptions = {
//     headerStyle: {
//         backgroundColor: colors.primary,
//     },
//     headerTintColor: '#FFFFFF',
//     headerTitleStyle: {
//         fontFamily: 'Silkscreen-Regular',
//     },
//     headerTitleAlign: 'center',
// }

const ShopNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categorías"
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation} />
                })
            }
        >
            <Stack.Screen
                name="Categorías"
                component={CategoriesScreen}

            />
            <Stack.Screen
                name="Productos"
                component={ProductsByCategoryScreen}

            />
            <Stack.Screen
                name="Detalle"
                component={ProductDetailScreen}

            />
        </Stack.Navigator>
    )
}

export default ShopNavigator
