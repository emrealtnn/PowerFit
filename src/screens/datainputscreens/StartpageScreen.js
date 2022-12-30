import * as React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";

export default function StartpageScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground
        source={require("../../../assets/images/startpageImage.png")}
        style={styles.image}
      >
        <View style={styles.textItem}>
          <Text style={styles.textStyle}> PowerFit </Text>
          <Text style={styles.textStyle2}>En güzel kıyafet vücudundur.</Text>
          <Text style={styles.textStyle2}>Ona iyi bak!</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.buttonitem}
          >
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={styles.buttonitem2}
          >
            <Text style={styles.buttonText}>Üye Ol</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  textItem: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 130,
    width: 300,
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "900",
    fontSize: 52,
    marginBottom: 10,
  },
  textStyle2: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  buttonitem: {
    width: 270,
    padding: 15,
    backgroundColor: "#f4311e",
    marginBottom: 20,
    borderRadius: 50,
  },
  buttonitem2: {
    width: 270,
    padding: 15,
    borderWidth: 2,
    borderColor: "#f4311e",
    marginBottom: 20,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});
