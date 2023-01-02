import * as React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Fontisto } from '@expo/vector-icons';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <View style={{marginTop:100}}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Bildirimler</Text>
                <Fontisto name="toggle-on" size={40} color="white" />
            </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Otomatik çıkış yap</Text>
                    <Fontisto name="toggle-off" size={40} color="white" />
                </TouchableOpacity>
            </View>
        </View>

        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    button: {
        width: 357,
        marginTop:20,
        backgroundColor: '#181818',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        paddingVertical: 20,
        margin: 10,

    },
})