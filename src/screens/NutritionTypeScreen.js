import React from "react";
import {View, SafeAreaView, TouchableOpacity, Text,} from "react-native";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

   export default function NutritionTypeScreen({ route, navigation }) {
       console.log("selam")
    const { nutrition } = route.params;
       console.log(nutrition);
       console.log("test");
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [nutritionType, setNutritionType] = useState([]);

    useEffect(() => {
        const getNutritionType = async () => {
            await getDoc(doc(db, "Nutrition", nutrition)).then((doc) => {
                if (doc.exists()) {
                    setNutritionType(Object.keys(doc.data()));
                } else {
                    console.log("No such document!");
                }
            });
        };
        getNutritionType();
    }, []);

    return (
        <View style={{ flex: 1 ,backgroundColor:'#000'}}>
            <SafeAreaView>
                <View style={{marginTop:50,alignItems:'center'}}>
                    {nutritionType.map((nutritionType) => (
                        <TouchableOpacity style={{backgroundColor:'#181818',padding:20,borderRadius:10,marginBottom:10,width:'90%'}}
                                          onPress={() => navigation.navigate("Nutrition", {nutritionType:nutritionType , nutrition: nutrition })}>
                            <Text style={{color:'#fff',fontSize:24}}>{nutritionType}</Text></TouchableOpacity>
                    ))}
                </View>
            </SafeAreaView>
        </View>
    );
}
