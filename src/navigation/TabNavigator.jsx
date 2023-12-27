import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet } from "react-native";
import { colors } from '../global/colors';
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'; 

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: ({focused}) =>(
                            <Fontisto name="shopping-store" size={24} color={focused?"#ffff":"#ccc"} />
                        )
                    }}
                />
                <Tab.Screen
                    name="CartStack"
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="cart-outline" size={24} color={focused?"#ffff":"#ccc"} />
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