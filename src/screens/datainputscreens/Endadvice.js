import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EndadviceScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <View style={{ marginTop: 100 }}></View>
      <Text style={style.text}>Bilgileriniz başarıyla kayıt edildi.</Text>
      <Image
        source={require("../../../assets/images/list.png")}
        style={style.image}>

      </Image>

        <TouchableOpacity
            onPress={() => navigation.navigate("Home", { screen: "Homee" })}
            style={{
                backgroundColor: "#f4311e",
                borderRadius: 50,
                marginTop: 100,
                alignSelf: "center",
                paddingVertical: 15,
                width: 327,
            }}
        >
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 20 }}>
                Anasayfaya Dön
            </Text>
        </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  text: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 30,
    textAlign: "center",
  },
  image: {
    marginTop: 80,
    alignSelf: "center",
    width: 200,
    height: 200,
  },
});
