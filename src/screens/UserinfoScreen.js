import * as React from "react";
import { View, Text,SafeAreaView, StyleSheet,TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

export default function UserinfoScreen({navigation}) {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [user, setUser] = useState([]);
    useEffect(() => {
      const getUsers = async () => {
        await getDoc(doc(db, "userInformations", auth.currentUser.uid)).then(
          (doc) => {
            if (doc.exists()) {
              setUser(doc.data());
            } else {
              console.log("No such document!");
            }
          }
        );
      };
      getUsers();
      
    }, []);
    return(

        <SafeAreaView style={{backgroundColor:'black',flex:1}}>
            <View style ={[style.textView,{marginTop:30 }]}>

                <TouchableOpacity >
                    <View style={{flexDirection:'row'}}>
                <Text style={style.text}>Adı </Text>
                <Text style={style.text2}>{user.name} ></Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style ={style.textView}>
                <TouchableOpacity >
                    <View style={{flexDirection:'row'}}>
                        <Text style={style.text}>Soyadı </Text>
                        <Text style={style.text2}>{user.surname} ></Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style ={style.textView}>
                <TouchableOpacity onPress={() => navigation.navigate('Registerinfo') }>
                    <View style={{flexDirection:'row'}}>
                        <Text style={style.text}>Yaş </Text>
                        <Text style={style.text2}>{user.age} ></Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style ={style.textView}>
                <TouchableOpacity >
                    <View style={{flexDirection:'row'}}>
                        <Text style={style.text}>Boy </Text>
                        <Text style={style.text2}>{user.height} ></Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style ={style.textView}>
                <TouchableOpacity >
                    <View style={{flexDirection:'row'}}>
                        <Text style={style.text}>Kilo </Text>
                        <Text style={style.text2}>{user.weight} ></Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
};
const style = StyleSheet.create({
    textView:{
        margin:10,
        backgroundColor:'#181818',
        borderRadius:10,
        flexDirection:'column',
    },
    text: {
        color:'#fff',
        fontSize:24,
        padding:20,
    },
    text2: {
        color:'#CDCFD0',
        padding:20,
        fontSize:24,
        position:'absolute',
        right:0
    }
})