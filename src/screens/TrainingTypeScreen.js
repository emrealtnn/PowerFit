import React from "react";
import {View, SafeAreaView, TouchableOpacity, Text,} from "react-native";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

export default function TrainingTypeScreen({ route, navigation }) {
  const { training } = route.params;
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [trainingType, setTrainingType] = useState([]);

  useEffect(() => {
    const getTrainingType = async () => {
      await getDoc(doc(db, "Training", training)).then((doc) => {
        if (doc.exists()) {
          setTrainingType(Object.keys(doc.data()));
        } else {
          console.log("No such document!");
        }
      });
    };
    getTrainingType();
  }, []);

  return (
    <View style={{ flex: 1 ,backgroundColor:'#000'}}>
      <SafeAreaView>
        <View style={{marginTop:50,alignItems:'center'}}>
        {trainingType.map((trainingType) => (
            <TouchableOpacity style={{backgroundColor:'#181818',padding:20,borderRadius:10,marginBottom:10,width:'90%'}}
                              onPress={() => navigation.navigate("Training", {trainingType:trainingType , training: training })}>
              <Text style={{color:'#fff',fontSize:24}}>{trainingType}</Text></TouchableOpacity>
        ))}
        </View>
      </SafeAreaView>
    </View>
  );
}
