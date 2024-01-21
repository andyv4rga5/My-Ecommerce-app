import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useState } from 'react'
import { useSignUpMutation } from '../services/authService'

const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [triggerSignup, result] = useSignUpMutation()

    const onSubmit = () => {
        triggerSignup({email, password})
    }

    return (
        <View style={styles.container}>
            <Input
                label="Email:"
                onChange={setEmail}
            />
            <Input
                label="Contraseña:"
                onChange={setPassword}
                isSecureEntry={true}
            />
            <Input
                label="Repetir contraseña:"
                onChange={setConfirmPassword}
                isSecureEntry={true}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Registrarme</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.subtitleLink}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 10,
    },
    btn: {
        padding: 10,
        backgroundColor: colors.primaryBack,
        borderRadius: 8,
        margin: 5,

    },
    btnText: {
        color: "#fff",
        fontFamily: "Barlow-Bold"
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
        fontSize: 12,
    },
    subtitleLink: {
        fontFamily: "Barlow-Light",
        color: "#fff",
        fontSize: 11,
        textDecorationLine: 'underline'
    }
})