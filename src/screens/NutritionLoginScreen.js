import * as React from "react";
import {SafeAreaView, View, TouchableOpacity, Text} from "react-native";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

export default function NutritionLoginScreen({ navigation }) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [nutritions, setNutritions] = useState([]);

    useEffect(() => {
        setNutritions([]);
        const getNutritions = async () => {
            const querySnapshot = await getDocs(collection(db, "Nutrition"));
            querySnapshot.forEach((doc) => {
                setNutritions((nutritions) => [...nutritions, doc.id]);
            });
        };
        getNutritions();
    }, []);

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor:'#000' }}>
            <View style={{marginTop:70}}>
                {nutritions.map((nutrition) => (
                    <TouchableOpacity style={{backgroundColor:'#181818',padding:20,borderRadius:10,marginBottom:10,width:'90%',alignSelf:'center'}}
                                      onPress={() => navigation.navigate("NutritionType", { nutrition: nutrition.toString() })}>
                        <Text style={{color:'#fff',fontSize:24}}>{nutrition}</Text></TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>

    );
}
