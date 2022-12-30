import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

export default function TrainingTypeScreen({ route, navigation }) {
  const { training } = route.params;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
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
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        {trainingType.map((trainingType) => (
          <Button
            title={trainingType}
            onPress={() =>
              navigation.navigate("Training", {
                trainingType: trainingType,
                training: training,
              })
            }
          />
        ))}
      </SafeAreaView>
    </View>
  );
}
