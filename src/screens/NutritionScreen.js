import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

export default function NutritionScreen ({ route, navigation }) {
    const { nutritionType, nutrition } = route.params;
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    const [nutritionTypes, setNutritionTypes] = useState([]);


    useEffect(() => {
        const getNutritionTypes = async () => {
            await getDoc(doc(db, "Nutrition", nutrition)).then((doc) => {
                if (doc.exists()) {
                    setNutritionTypes(doc.data());
                } else {
                    console.log("No such document!");
                }
            });
        };
        getNutritionTypes();
    }, []);

    return (
        <View style={{ flex: 1 ,backgroundColor:'#000'}}>
            <ScrollView style={{marginTop:100}}>
                {Object.entries(nutritionTypes).map(([key, value]) => {
                    if (key === nutritionType && value[6] === undefined) {
                        return (
                            <View >
                                <Text style={styles.text}>{value[0]}</Text>
                                <Text style={styles.text}>{value[1]}</Text>
                                <Text style={styles.text}>{value[2]}</Text>
                                <Text style={styles.text}>{value[3]}</Text>
                                <Text style={styles.text}>{value[4]}</Text>
                                <Text style={styles.text}>{value[5]}</Text>
                                <Text style={styles.text2}><Text style={{color:'#f4311e'}}>Not: </Text>Tüm hareketler 4 set ve maksimum tekrardır.</Text>
                                <Text style={styles.text2}><Text style={{color:'#f4311e'}}>Not: </Text>Her set arasında 40-60 saniye dinlenme süresi veriniz.</Text>

                            </View>
                        );

                    }
                    else if (key === nutritionType && value[9] !== undefined) {
                        return (
                            <View>
                                <Text style={styles.text}>{value[0]}</Text>
                                <Text style={styles.text}>{value[1]}</Text>
                                <Text style={styles.text}>{value[2]}</Text>
                                <Text style={styles.text}>{value[3]}</Text>
                                <Text style={styles.text}>{value[4]}</Text>
                                <Text style={styles.text}>{value[5]}</Text>
                                <Text style={styles.text}>{value[6]}</Text>
                                <Text style={styles.text}>{value[7]}</Text>
                                <Text style={styles.text}>{value[8]}</Text>
                                <Text style={styles.text}>{value[9]}</Text>
                                <Text style={styles.text2}><Text style={{color:'#f4311e'}}>Not: </Text>Tüm hareketler 4 set ve maksimum tekrardır.</Text>
                                <Text style={styles.text2}><Text style={{color:'#f4311e'}}>Not: </Text>Her set arasında 40-60 saniye dinlenme süresi veriniz.</Text>

                            </View>
                        );

                    }

                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        margin: 10,
        backgroundColor: '#181818',
        borderRadius: 10,

    },
    text2: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        margin: 10,
        backgroundColor: '#181818',
        borderRadius: 10,

    },
});