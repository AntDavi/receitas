import { View, Text, StyleSheet} from 'react-native';

import { useRoute } from '@react-navigation/native';

export function Detail () {
    const route = useRoute();

    return (
        <View style={styles.container}>
            <Text>{route.params?.data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink'
    }
})