import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function HomeScreen() {
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>Home</Text>

            <Image
                style={{ flex: 1, width: 150, height: 150, resizeMode: 'contain' }}
                source={{ uri: 'https://images.vexels.com/media/users/3/135553/isolated/preview/fe1680d9e81708fd79fc27b791401673-icone-de-calculadora-plana.png?width=320' }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginTop: 230,
    }, picker: {
        height: 50,
        width: 200,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    }
});
export default HomeScreen;