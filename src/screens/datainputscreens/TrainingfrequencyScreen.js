import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TrainingfrequencyScreen({ navigation }) {

  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <View style={{ marginLeft: 30, marginTop: 100 }}>
        <Text style={{ color: "#CDCFD0" }}> 2 / 3</Text>
        <Text
          style={{
            color: "#fff",
            marginTop: 15,
            fontWeight: "700",
            fontSize: 24,
          }}
        >
          Haftada kaç gün spora gidersiniz?
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.button}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Registerinfo')} style={styles.button}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#181818",
    marginHorizontal: 15,
    width: 150,
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
