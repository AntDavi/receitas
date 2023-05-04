import { Text, StyleSheet,} from 'react-native';
import { View } from 'moti'

export function Logo () {
    return (
        <View 
            style={styles.logoArea}
            from={{
                opacity: 0,
                translateX: -50,
            }}
            animate={{
                opacity: 1,
                translateX: 0
            }}
            transition={{
                delay: 100,
                type: 'timing',
                duration: 700
            }}
        >
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