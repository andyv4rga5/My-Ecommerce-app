import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useLogInMutation } from '../services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { LinearGradient } from 'expo-linear-gradient';
import { insertSession } from '../db'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogIn, result] = useLogInMutation()

    const onSubmit = () => {
        triggerLogIn({ email, password })
    }

    const dispatch = useDispatch()

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data))
            insertSession({
                localId: result.data.localId,
                email: result.data.email,
                token: result.data.idToken
            })
        }
    }, [result])

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[colors.primary, colors.primarySecond]}
                style={styles.background}
            />
            <Input
                label="Email:"
                onChange={setEmail}
            />
            <Input
                label="Contraseña:"
                onChange={setPassword}
                isSecureEntry={true}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Ingresar</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
                    <Text style={styles.subtitleLink}>Crear una</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 10,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 700,
    },
    btn: {
        padding: 12,
        backgroundColor: colors.primaryBack,
        borderRadius: 8,
        margin: 5,
    },
    btnText: {
        color: "#fff",
        fontFamily: "Barlow-Bold",
        fontSize: 16,
    },
    altContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    subtitle: {
        color: "#fff",
        fontFamily: "Barlow-Bold",
        fontSize: 14,
    },
    subtitleLink: {
        fontFamily: "Barlow-Light",
        color: "#fff",
        fontSize: 14,
        textDecorationLine: 'underline'
    }
})