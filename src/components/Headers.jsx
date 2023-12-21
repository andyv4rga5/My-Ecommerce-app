import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';

const Header = ({title, navigation}) =>{
    return(
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={navigation.goBack}>
                <AntDesign name="back" size={24} color="white"/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:30,
        alignItems: 'center',
        backgroundColor: colors.primary,
    }, 

    headerTitle:{
        color: '#FFFFFF',
        fontSize:22,
        fontFamily: 'Silkscreen-Regular',
    }
})
