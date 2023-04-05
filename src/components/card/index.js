import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native'

export function CardFood({ data }) {

    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate("Detail", { data: data })
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={handleNavigate}>
            <Image 
                source={{ uri: data.cover}}
                style={styles.cover}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.text}>{data.total_ingredients} ingredientes | {data.time} min</Text>
            </View>

            <LinearGradient
                style={styles.gradient}
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.95)']}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    cover: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    info: {
        position: 'absolute',
        bottom: 14,
        left: 14,
        zIndex: 99

    },
    title: {
        color: '#f1f1f1',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        color: '#f1f1f1',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '55%',
        borderRadius: 14,
        zIndex: 1,
        backgroundColor: 'transparent'
    }
})