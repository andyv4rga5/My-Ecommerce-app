import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { EvilIcons, Entypo } from '@expo/vector-icons';

const Search = ({ onSearchHandlerEvent }) => {
    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState('')

    const onSearchHandler = () => {
        const regEx = /[^\w\s]/
        if (regEx.test(searchInput)) {
            setError("Por favor, verifique que no existan caracteres especiales")
            setSearchInput("")
        } else {
            setError("")
            onSearchHandlerEvent(searchInput)
        }
    }

    return (
        <>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setSearchInput}
                    placeholder='Buscar...'
                    value={searchInput}
                />
                <TouchableOpacity onPress={() => { onSearchHandler(searchInput) }}>
                    <EvilIcons name="search" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={null}>
                    <Entypo name="cross" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {
                error
                    ?
                    <View><Text>{error}</Text></View>
                    :
                    null
            }
        </>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    textInput: {
        width: '80%'
    }
})