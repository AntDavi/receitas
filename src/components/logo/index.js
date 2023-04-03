import { View, Text, StyleSheet,} from 'react-native';

export function Logo () {
    return (
        <View style={styles.logoArea}>
            <Text style={styles.logoTitle}>Receita Fácil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: '#4cbe6c',
        alignSelf: 'flex-start',
        padding: 8,
        paddingLeft: 16,
        paddingRight: 22,

        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 32,

        marginBottom: 8,

    },
    logoTitle: {
        fontSize: 18,
        color: '#f1f1f1',
        fontWeight: 'bold'
    }
})