import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet } from "react-native";
import { colors } from '../global/colors';
import { Entypo } from '@expo/vector-icons'; 
import StoreIcon from '@mui/icons-material/Store';

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";

Icon.loadFont();

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
                        tabBarIcon: () =>{
                            <StoreIcon size={24} color="#fff"/>
                        }
                    }}
                />
                <Tab.Screen name="CartStack" component={CartNavigator} />
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
    }
})