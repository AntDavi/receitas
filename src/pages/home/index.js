import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Logo } from '../../components/logo'
import { CardFood } from '../../components/card';

import { Ionicons } from '@expo/vector-icons'

import api from '../../services/api';

export function Home () {

    const [inputValue, setInputValue] = useState("")
    const [foods, setFoods] = useState("")

    useEffect(() => {

        async function fetchApi() {
            const response = await api.get("/foods")
            setFoods(response.data)
        }

        fetchApi()

    }, [])

    function handleSearch () {
        console.log(inputValue)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Logo/>
            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>

            <View style={styles.form}>
                <TextInput 
                    placeholder='Qual receita você procura?'
                    style={styles.input}
                    value={inputValue}
                    onChangeText={ (text) => setInputValue(text) }
                />
                <TouchableOpacity 
                    onPress={handleSearch}
                >
                    <Ionicons name='search' size={28} color="#4cbe6c"/>
                </TouchableOpacity>
            </View>

            <FlatList
                data={foods}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({item}) => <CardFood/> }
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e0e0e',
    },
    form: {
        justifyContent: 'center',
        paddingLeft: 14,
        paddingRight: 14,
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 16,
        marginBottom: 16
    },
    input: {
        fontSize: 16,
        width: '90%',
        maxWidth: '90%',
        height: 54,
    }
})