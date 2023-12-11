import {View, Text, StyleSheet} from 'react-native'

const Header = ({title}) =>{
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF6700'
    }, 

    headerTitle:{
        color: '#fff'
    }
})
