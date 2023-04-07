import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

import { Feather } from '@expo/vector-icons'

import { WebView } from 'react-native-webview'

export function VideoView({ handleClose, videoUrl }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleClose}>
                <Feather name="arrow-left" size={24} color="#fff" />
                <Text style={styles.textBack}>Voltar</Text>
            </TouchableOpacity>

            <WebView
                style={styles.contentView}
                source={{ uri: videoUrl}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    backButton: {
        width: '100%',
        backgroundColor: '#4cbe6c',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16
    },
    textBack: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 500,
        marginLeft: 16,
        marginBottom: 2
    },
    contentView: {
        flex: 1,
        width: '100%'
    }
})