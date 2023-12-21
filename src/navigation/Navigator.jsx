import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
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

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Categorías"
                screenOptions={
                    ({ navigation, route }) => ({
                        header: () => <Header title={route.name} navigation={navigation}/>
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
        </NavigationContainer >
    )
}

export default Navigator
