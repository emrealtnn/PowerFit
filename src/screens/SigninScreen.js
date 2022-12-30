import * as React from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase-config";
import {useNavigation} from "@react-navigation/native";
import {getFirestore, doc, setDoc} from "firebase/firestore";
import "firebase/firestore";

export default function SigninScreen() {
    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                console.log("Kayıt Başarılı!");
                const user = userCredential.user;
                console.log(user);
                const data = {
                    name: name,
                    surname: surname,
                    email: email,
                };
                await setDoc(doc(db, "userInformations", user.uid), data);
                navigation.navigate("Takeadvice");
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <ScrollView style={{backgroundColor: "#000", flex: 1}}>
            <View style={style.textItem}>
                <Text style={style.textStyle}> PowerFit </Text>
                <Text style={style.textStyle2}>Vücudunuzu inşa etmek için</Text>
                <Text style={style.textStyle2}>hesap oluşturun</Text>
            </View>
            <View>
                <View style={style.board}>
                    <View style={{width: 327, marginTop: 10}}>
                        <Text style={style.textinputItem}> Adınız</Text>
                    </View>
                    <TextInput
                        style={style.textInput}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    ></TextInput>
                </View>
                <View style={style.board}>
                    <View style={{width: 327,}}>
                        <Text style={style.textinputItem}> Soyadınız</Text>
                    </View>
                    <TextInput
                        style={style.textInput}
                        value={surname}
                        onChangeText={(text) => setSurname(text)}
                    ></TextInput>
                </View>
                <View style={style.board}>
                    <View style={{width: 327}}>
                        <Text style={style.textinputItem}> Email</Text>
                    </View>
                    <TextInput
                        style={style.textInput}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    ></TextInput>
                </View>
                <View style={[style.board, {marginTop: 30}]}>
                    <View style={{width: 327}}>
                        <Text style={style.textinputItem}> Şifre</Text>
                    </View>
                    <TextInput
                        style={style.textInput}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    ></TextInput>
                </View>
                <View style={[style.buttons]}>
                    <TouchableOpacity
                        onPress={handleCreateAccount}
                        style={[style.buttonitem, {backgroundColor: "#f4311e"}]}
                    >
                        <Text style={[style.buttonText, {marginStart: 0}]}>Üye Ol</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginVertical: 15,
                }}
            >
                <Text style={{color: "#CDCFD0"}}>Hesabınız var mı? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{color: "#f4311e"}}> Giriş Yap </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const style = StyleSheet.create({
    textItem: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 50,
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
    board: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        flexDirection: "column",
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
    alert: {
        color: "#fff",
        fontSize: 16,
    },
});
