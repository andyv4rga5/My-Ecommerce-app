import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';

const Header = ({ title, navigation }) => {

    const email = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <View style={styles.headerContainer}>
            {
                email
                &&
                <TouchableOpacity onPress={onLogout}>
                    <AntDesign name="logout" size={24} color="white" />
                </TouchableOpacity>
            }
            <Text style={styles.headerTitle}>{title}</Text>
            {
                navigation.canGoBack()
                    ?
                    <TouchableOpacity onPress={navigation.goBack}>
                        <AntDesign name="back" size={24} color="white" />
                    </TouchableOpacity>
                    :
                    <View></View>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },

    headerTitle: {
        color: '#FFFFFF',
        fontSize: 26,
        fontFamily: 'Silkscreen-Regular',
    }
})
