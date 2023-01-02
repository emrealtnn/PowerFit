import React from "react";
import {View, Text, StyleSheet, Linking, TouchableOpacity} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';


export default function HelpScreen() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',marginTop:250}}>
            <TouchableOpacity style={{flexDirection:'row',width:327,alignItems:'center'}} onPress={() => Linking.openURL('https://wa.me/5456463672?text=Yardım almak istiyorum')}>
                <FontAwesome5 name="whatsapp" size={50} color="white"  />
            <Text style={{color: '#fff', fontSize: 24}}>   WhatsApp Destek Hattı</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',marginTop:50}}>
                <TouchableOpacity style={{flexDirection:'row',width:327,alignItems:'center'}} onPress={() => Linking.openURL('https://www.instagram.com/emrealtn5/')}>
                    <FontAwesome5 name="instagram" size={50} color="white"  />
                    <Text style={{color: '#fff', fontSize: 24}}>   Instagram Destek Hattı</Text>
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
});