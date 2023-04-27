import { View, Text, StyleSheet, SafeAreaView} from 'react-native';

export function Favorites () {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Página Favorites</Text>
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
})