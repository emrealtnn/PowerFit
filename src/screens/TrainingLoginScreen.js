import * as React from "react";
import {SafeAreaView, View, TouchableOpacity, Text} from "react-native";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

export default function TrainingLoginScreen({ navigation }) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    setTrainings([]);
    const getTrainings = async () => {
      const querySnapshot = await getDocs(collection(db, "Training"));
      querySnapshot.forEach((doc) => {
        setTrainings((trainings) => [...trainings, doc.id]);
      });
    };
    getTrainings();
  }, []);

  return (

      <SafeAreaView style={{ flex: 1, backgroundColor:'#000' }}>
        <View style={{marginTop:70}}>
        {trainings.map((training) => (
            <TouchableOpacity style={{backgroundColor:'#181818',padding:20,borderRadius:10,marginBottom:10,width:'90%',alignSelf:'center'}}
             onPress={() => navigation.navigate("TrainingType", { training: training })}>
              <Text style={{color:'#fff',fontSize:24}}>{training}</Text></TouchableOpacity>
        ))}
        </View>
      </SafeAreaView>

  );
}
