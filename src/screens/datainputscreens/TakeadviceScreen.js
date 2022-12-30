import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TakeadviceScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <View style={styles.imageItem}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/health.png")}
        ></Image>
      </View>
      <View style={styles.textItem}>
        <Text style={styles.text}>
          Sağlıklı beslenmenin anahtarı, doğru miktarda kalori almak
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.buttonitem, { backgroundColor: "#f4311e" }]}
          onPress={() => navigation.navigate("Inputgoal")}
        >
          <Text style={[styles.buttonText, { marginStart: 0 }]}>
            Tavsiyemizi al
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home', { screen: 'Homee' })}>
          <Text style={{ color: "#CDCFD0" }}>Şimdilik Atla </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imageItem: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  image: {
    height: 128,
    width: 128,
  },
  textItem: {
    width: 250,
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  buttonitem: {
    width: 327,
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 50,
  },
  buttonText: {
    marginStart: 30,
    textAlign: "center",
    color: "#fff",
    fontWeight: "300",
    fontSize: 16,
  },
});
