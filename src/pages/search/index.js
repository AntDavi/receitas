import { View, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { CardFood } from '../../components/card';

import NotFoundImage from '../../assets/notfound.png'

import api from '../../services/api'

export function Search() {
    const route = useRoute()
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        async function fetchRecipes() {
            const response = await api.get(`/foods?name_like=${route.params?.name}`)

            setRecipes(response.data)
        }

        fetchRecipes()
    }, [route.params?.name])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={recipes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <CardFood data={item} />}
                ListEmptyComponent={() => 
                    <View style={styles.notFound}>
                        <Image
                            source={NotFoundImage}
                        />
                        <Text style={styles.warningTitle}>Não encontramos nenhum resultado
                        para sua pesquisa.</Text>
                        <Text style={styles.warningSubTitle}>Por favor, verifique o termo digitado e
                        tente novamente...</Text>
                    </View>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingTop: 16,
        paddingStart: 14,
        paddingEnd: 14,
    },
    notFound: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: 300,
        marginTop: '40%'
    },
    warningTitle: {
        fontSize: 18,
        textAlign: 'center'
    },
    warningSubTitle: {
        fontSize: 14,
        textAlign: 'center'
    }
})