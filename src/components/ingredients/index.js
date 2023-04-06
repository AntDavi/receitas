import { View, Text, StyleSheet } from "react-native";

export function Ingredients({data}) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.name}>{data.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f1f1f1",
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 12,
        borderRadius: 4,
    },
    name: {
        fontWeight: 500,
        fontSize: 14,
    }
})