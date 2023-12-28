import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet } from "react-native";
import { colors } from '../global/colors';
import { Fontisto, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: styles.tabBar,
                    tabBarLabelStyle: { color: '#fff', fontSize:15 },
                }}
            >
                <Tab.Screen
                    name="Shop Stack"
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: ({focused}) =>(
                            <Fontisto name="shopping-store" size={24} color={focused?"#ffff":"grey"} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Cart Stack"
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="cart-outline" size={24} color={focused?"#ffff":"grey"} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Order Stack"
                    component={OrdersNavigator}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <FontAwesome name="paper-plane" size={24} color={focused?"#ffff":"grey"} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.primary,
        shadowColor: colors.shadows,
        elevation:1,
        position: "absolute",
        marginHorizontal: 25,
        bottom: 25, 
        height: 60,
        borderRadius:20,
    },
})