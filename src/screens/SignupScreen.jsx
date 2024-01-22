import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { signupSchema } from '../validations/signupSchema'
import { LinearGradient } from 'expo-linear-gradient';

const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const [triggerSignUp, result] = useSignUpMutation()

    const onSubmit = () => {
        setEmailError("")
        setPasswordError("")
        setConfirmPasswordError("")
        try {
            signupSchema.validateSync({ email, password, confirmPassword }, { abortEarly: false })
        } catch (error) {
            error.errors.map(e => {
                console.log(Object.keys(e)[0])
                const customError = Object.values(e)[0]
                switch (Object.keys(e)[0]) {
                    case "empty_email":
                        setEmailError(customError)
                    case "invalid_email":
                        setEmailError(customError)
                    case "empty_password":
                        setPasswordError(customError)
                    case "invalid_password":
                        setPasswordError(customError)
                    case "invalid_confirm_password":
                        setConfirmPasswordError(customError)
                    case "invalid_match_password":
                        setConfirmPasswordError(customError)
                    default:
                        break
                }
            });
        }
        triggerSignUp({ email, password })
    }

    const dispatch = useDispatch()

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data))
        }
    }, [result])

    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <LinearGradient
                // Background Linear Gradient
                colors={[colors.primary, colors.primarySecond]}
                style={styles.background}
            />
            <Input
                label="Email:"
                onChange={setEmail}
                error={emailError}
            />
            <Input
                label="Contraseña:"
                onChange={setPassword}
                isSecureEntry={true}
                error={passwordError}
            />
            <Input
                label="Repetir contraseña:"
                onChange={setConfirmPassword}
                isSecureEntry={true}
                error={confirmPasswordError}
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
        </KeyboardAvoidingView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        // backgroundColor: colors.primary,
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