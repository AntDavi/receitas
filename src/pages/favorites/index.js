import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import { useIsFocused } from '@react-navigation/native'

import { getFavorites } from '../../utils/storage'
import { CardFood } from '../../components/card';

export function Favorites () {
    const [recipes, setRecipes] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        let isActive = true

        async function getRecipes() {
            const result = await getFavorites("@appreceitas")
            if(isActive) {
                setRecipes(result)
            }
        }

        if(isActive) {
            getRecipes();
        }

        return () => {
            isActive = false;
        }

    }, [isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas Favoritas</Text>

            {recipes.length === 0 && (
                <Text style={styles.subtitle}>⚠️ Ainda não há uma receita salva</Text>
            )}

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{marginTop: 14}}
                data={recipes}
                keyExtractor={(item) => String(item.id)}
                renderItem={ ({item}) => <CardFood data={item}/> }
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
    subtitle: {
        fontSize: 18,
        color: '#0e0e0e',
        fontWeight: '500',
        marginTop: 64,
        alignSelf: 'center',
    }
})