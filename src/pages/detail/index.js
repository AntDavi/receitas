import { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, Modal, Share} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { Entypo, AntDesign, Feather } from '@expo/vector-icons';

import { Ingredients } from '../../components/ingredients';
import { Instructions } from '../../components/instructions';
import { VideoView } from '../../components/video';

import { isFavorite, saveFavorites, removeFavorites } from '../../utils/storage'

export function Detail () {
    const route = useRoute();
    const navigation = useNavigation();
    const [showVideo, setShowVideo] = useState(false);
    const [favorite, setFavorite] = useState(false)

    useLayoutEffect(() => {

        async function getStatusFavorites() {
            const recipeFavorite = await isFavorite(routes.params?.data);
            setFavorite(recipeFavorite)
        }

        getStatusFavorites()

        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => handleFavoriteRecipe(route.params?.data)}>
                    { favorite ? (
                        <Entypo 
                            name='heart' 
                            color="#ff4141" 
                            size={28} 
                        />
                    ) : (
                        <Entypo 
                            name='heart-outlined' 
                            color="#010101" 
                            size={28} 
                        />
                    )}
                </Pressable>
            )
        })

    }, [navigation, route.params?.data, favorite])

    function handleOpenVideo() {
        setShowVideo(true)
    }

    function handleFavoriteRecipe() {
        console.log('reste')
    }

    async function shareRecipe() {
        try {
            await Share.share({
                url: "https://anthonyfront.netlify.app/",
                message: `Receita: ${route.params?.data.name}\nIngredientes: ${route.params?.data.total_ingredients}\nVi lá no app Receita Fácil`
            })
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 14 }} style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable onPress={handleOpenVideo}>
                <View style={styles.playIcon}>
                    <AntDesign name='playcircleo' size={50} color="#fafafa" />
                </View>
                <Image 
                    source={{ uri: route.params?.data.cover}}
                    style={styles.cover}
                />
            </Pressable>
            
            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <Text style={styles.ingredients}>Ingredientes ({route.params?.data.total_ingredients})</Text>
                </View>
                <Pressable onPress={shareRecipe}>
                    <Feather name='share-2' size={24} color='#010101'/>
                </Pressable>
            </View>

            {route.params?.data.ingredients.map((item) => (
                <Ingredients key={item.id} data={item}/>
            ))}

            <View style={styles.instrucionArea}>
                <Text style={styles.instrucionText}>Modo de Preparo</Text>
                <Feather 
                    name='arrow-down'
                    size={24}
                    color="#fff"
                />
            </View>

            {route.params?.data.instructions.map((item, index) => (
                <Instructions key={item.id} data={item} index={index}/>
            ))}

            <Modal visible={showVideo} animationType='slide'>
                <VideoView
                    handleClose={() => {
                        setShowVideo(false)
                    }}
                    videoUrl={route.params?.data.video}
                />
            </Modal>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingTop: 14,
        paddingStart: 14,
        paddingEnd: 14,
    },
    cover: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 12
    },
    playIcon: {
        position: 'absolute',
        zIndex: 9,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    title: {
        fontSize: 24,
        color: '#010101',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    ingredients: {
        color: '#010101',
        fontSize: 18,
    },
    instrucionArea: {
        backgroundColor: '#4cbe5c',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 4,
        marginBottom: 14,
    },
    instrucionText: {
        fontSize: 18,
        fontWeight: 500,
        color: '#fff',
        marginRight: 8,
    }
})