import * as React from "react";
import { ImageBackground, View, Text,TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

export default function ProfileScreen({navigation}) {
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

  signOutUser = async () => {
    try {
      await firebaseConfig.auth().signOut();
      navigation.navigate("Login");
      console.log("User signed out!");

    }
    catch(error) {
        console.log(error);;
      };
  };
  
  return (
    <View style={{ flex: 1 }}>  
      <ImageBackground
        source={require("../../assets/images/profile-img.jpg")}
        style={{ flex: 1 }}
      >
        <View style={{marginTop:100,alignItems:'center'}}>
        <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
          {user.name} {user.surname}
        </Text>
        </View>
        <View
          style={{
            height: 400, position: "absolute", marginTop:300, left: 0, right: 0, bottom: 0,
            flexDirection: "column", backgroundColor: "black", opacity: 0.5, borderRadius: 40,
          }}>
            <View >
              <View style={{paddingVertical:20,paddingLeft:20}}>
              <TouchableOpacity onPress={() => navigation.navigate("Userinfo")}>
              <Text style={{color:'#fff',fontSize:24}}>Bilgilerim</Text>
              </TouchableOpacity>
              </View>
              <View style={{borderWidth: 1,marginLeft:15,marginRight:15, borderColor:'white',}}>
              </View>
            </View>
            <View >
              <View style={{paddingVertical:20,paddingLeft:20}}>
              <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Text style={{color:'#fff',fontSize:24}}>Ayarlar</Text>
              </TouchableOpacity>
              </View>
              <View style={{borderWidth: 1,marginLeft:15,marginRight:15, borderColor:'white',}}>
              </View>
            </View>
            <View >
              <View style={{paddingVertical:20,paddingLeft:20}}>
              <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Text style={{color:'#fff',fontSize:24}}>Premium satın al</Text>
              </TouchableOpacity>
              </View>
              <View style={{borderWidth: 1,marginLeft:15,marginRight:15, borderColor:'white',}}>
              </View>
            </View>
            <View >
              <View style={{paddingVertical:20,paddingLeft:20}}>
              <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Text style={{color:'#fff',fontSize:24}}>Yardım</Text>
              </TouchableOpacity>
              </View>
              <View style={{borderWidth: 1,marginLeft:15,marginRight:15, borderColor:'white',}}>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => {signOutUser()}}>
              <Text style={{color:'red',fontSize:24,textAlign:'center',marginTop:25,fontWeight:'600'}}> Çıkış Yap</Text>
              </TouchableOpacity>
            </View>
          </View>
      </ImageBackground>
    </View>
  );
}
