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

export default function TrainingScreen({ route, navigation }) {
  const { trainingType, training } = route.params;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  console.log(trainingType);
  console.log(training);

  const [trainingTypes, setTrainingTypes] = useState([]);

  useEffect(() => {
    const getTrainingTypes = async () => {
      await getDoc(doc(db, "Training", training)).then((doc) => {
        if (doc.exists()) {
          setTrainingTypes(doc.data());
        } else {
          console.log("No such document!");
        }
      });
    };
    getTrainingTypes();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        {Object.entries(trainingTypes).map(([key, value]) => {
          if (key === trainingType) {
            return (
              <View>
                <Text>{value}</Text>
              </View>
            );
          }
        })}
      </SafeAreaView>
    </View>
  );
}
