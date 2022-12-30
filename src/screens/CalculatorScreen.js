import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CalculatorScreen({navigation}) {
    return(
        <View style={{backgroundColor: '#000', flex: 1}}>

            <View style={{marginTop: 100,marginLeft:20,marginRight:20}}>
                <TouchableOpacity style={{backgroundColor:'#181818',borderRadius:10}} onPress={()=> navigation.navigate('Vkical')}>
                    <Text style={{color: '#fff',padding:20,fontSize:20,textAlign:'center'}}>Vücut Kitle İndeksi Hesaplama </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}