import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import { deleteSession } from '../db';

const Header = ({ title, navigation }) => {

    const email = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        const deletedSession = deleteSession(localId)
        console.log("Secion cerrada: ", deletedSession)
    }

    return (
        <View style={styles.headerContainer}>
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
            {
                email
                &&
                <TouchableOpacity onPress={onLogout}>
                    <AntDesign name="logout" size={24} color="white" />
                </TouchableOpacity>
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
