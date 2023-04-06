import { View, Text, StyleSheet } from "react-native";

export function Instructions({data, index}) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{index+1}- </Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#f1f1f1",
        marginBottom: 14,
        flexDirection: 'row',
        padding: 8,
        borderRadius: 4,
    },
    number: {
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
    }
})