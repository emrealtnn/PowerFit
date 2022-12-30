import * as React from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../../firebase-config";
import {getFirestore, setDoc, doc} from "firebase/firestore";
import "firebase/firestore";
import {getAuth} from "firebase/auth";


export default function RegisterinfoScreen({navigation}) {
    const [height, setHeight] = React.useState("");
    const [age, setAge] = React.useState("");
    const [weight, setWeight] = React.useState("");

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const currentUser = auth.currentUser;

    const handleSubmit = async (e) => {
        e.preventDefault();
            const data = {
                height: height,
                age: age,
                weight: weight,
            };

            const collectionRef = doc(db, 'userInformations', currentUser.uid);
            await setDoc(collectionRef, data, {merge: true});
            navigation.navigate("Endadvice");

    }


    return (
        <ScrollView style={{backgroundColor: "#000", flex: 1}}>
            <View style={{marginLeft: 30, marginTop: 90}}>
                <Text style={{color: "#CDCFD0"}}> 3 / 3</Text>
                <Text
                    style={{color: "#fff", marginTop: 15, fontWeight: "700", fontSize: 24,}}>
                    {" "} Kaç yaşındasınız?
                </Text>
                <View
                    style={{
                        marginTop: 15,
                        marginRight: 30,
                        padding: 20,
                        backgroundColor: "#181818",
                        borderRadius: 15,
                    }}>
                    <TextInput
                        keyboardType={"number-pad"}
                        placeholder={"Örn: 23"}
                        placeholderTextColor={"#CDCFD0"}
                        style={{color: "#fff"}}
                        value={age}
                        onChangeText={(num) => setAge(num)}
                    ></TextInput>
                </View>
            </View>
            <View style={{marginLeft: 30, marginTop: 20}}>
                <Text style={{color: "#fff", marginTop: 15, fontWeight: "700", fontSize: 24,}}>
                    {" "} Boyunuz kaç?
                </Text>
                <View
                    style={{
                        marginTop: 15,
                        marginRight: 30,
                        padding: 20,
                        backgroundColor: "#181818",
                        borderRadius: 15,
                    }}>
                    <TextInput
                        keyboardType={"number-pad"}
                        placeholder={"Örn: 180"}
                        placeholderTextColor={"#CDCFD0"}
                        style={{color: "#fff"}}
                        value={height}
                        onChangeText={(num) => setHeight(num)}
                    ></TextInput>
                </View>
            </View>
            <View style={{marginLeft: 30, marginTop: 20}}>
                <Text style={{color: "#fff", marginTop: 15, fontWeight: "700", fontSize: 24,}}>
                    {" "} Kilonuz kaç?
                </Text>
                <View style={{
                    marginTop: 15,
                    marginRight: 30,
                    padding: 20,
                    backgroundColor: "#181818",
                    borderRadius: 15,
                }}>
                    <TextInput
                        keyboardType={"number-pad"}
                        placeholder={"Örn: 70"}
                        placeholderTextColor={"#CDCFD0"}
                        style={{color: "#fff"}}
                        value={weight}
                        onChangeText={(num) => setWeight(num)}
                    ></TextInput>
                </View>
            </View>
            <View>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                        backgroundColor: '#181818',
                        borderRadius: 10,
                        marginTop: 40,
                        alignSelf: 'center',
                        padding: 20
                    }}>
                    <Ionicons name="arrow-forward" size={24} color="white"/>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
