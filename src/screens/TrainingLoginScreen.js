import * as React from "react";
import { SafeAreaView, Button, View } from "react-native";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

export default function TrainingLoginScreen({ navigation }) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
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
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        {trainings.map((training) => (
          <Button
            title={training}
            onPress={() =>
              navigation.navigate("Trainingtype", { training: training })
            }
          />
        ))}
      </SafeAreaView>
    </View>
  );
}
