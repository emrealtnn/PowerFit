import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InputgoalScreen({ navigation }) {


    return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <View style={{ marginLeft: 30, marginTop: 90 }}>
        <Text style={{ color: "#CDCFD0" }}> 1 / 3</Text>
        <Text
          style={{
            color: "#fff",
            marginTop: 15,
            fontWeight: "700",
            fontSize: 24,
          }}
        >
          {" "}
          Amacın ne?
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kilo verme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hacim Kazanma</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=> navigation.navigate('Trainingfre')} style={styles.button}>
          <Text style={styles.buttonText}>Form koruma</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#181818",
    marginHorizontal: 40,
    width: 327,
    borderRadius: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    padding: 32,
    textAlign: "center",
  },
});
