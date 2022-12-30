import * as React from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Takeadvice");
      })
      .catch((error) => {
        Alert.alert("Lütfen bilgilerinizi kontrol ediniz");
      });
  };

  return (
    <ScrollView style={{ backgroundColor: "#000", flex: 1 }}>
      <SafeAreaView>
        <View style={styles.textItem}>
          <Text style={styles.textStyle}> PowerFit </Text>
          <Text style={styles.textStyle2}>En güzel kıyafet vücudundur.</Text>
          <Text style={styles.textStyle2}>Ona iyi bak!</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            flexDirection: "column",
          }}
        >
          <View style={{ width: 327 }}>
            <Text style={styles.textinputItem}> Email:</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            flexDirection: "column",
          }}
        >
          <View style={{ width: 327 }}>
            <Text style={styles.textinputItem}> Şifre:</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 35,
          }}
        >
          <FontAwesome5 name="square" size={20} color="white" />
          <Text style={{ color: "white", paddingLeft: 5 }}>Beni Hatırla</Text>
        </View>
        <View style={[styles.buttons]}>
          <TouchableOpacity
            style={[styles.buttonitem, { backgroundColor: "#f4311e" }]}
            onPress={handleSignIn}
          >
            <Text style={[styles.buttonText, { marginStart: 0 }]}>
              Giriş Yap
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginVertical: 20,
          }}
        >
          <Text style={{ color: "#CDCFD0" }}>Hesabınız yok mu? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={{ color: "#f4311e" }}> Üye Ol </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textItem: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 70,
    width: 300,
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "900",
    fontSize: 52,
    marginBottom: 5,
  },
  textStyle2: {
    textAlign: "center",
    color: "#CDCFD0",
    fontWeight: "300",
    fontSize: 13,
  },
  textinputItem: {
    color: "#CDCFD0",
    fontSize: 14,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  textInput: {
    width: 327,
    height: 48,
    padding: 15,
    backgroundColor: "#181818",
    marginBottom: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  iconstyle: {
    borderWidth: 1,
    borderColor: "#CDCFD0",
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
