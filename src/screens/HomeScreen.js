import * as React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#000", flex: 1 }}>
      <ScrollView>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "900",
              fontSize: 52,
              marginBottom: 5,
            }}
          >
            {" "}
            PowerFit{" "}
          </Text>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              backgroundColor: "#181818",
              borderRadius: 10,
              width: 360,
            }}
          >
            <Image
              style={{
                width: 300,
                height: 250,
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 20,
              }}
              source={require("../../assets/images/bcaa.png")}
            ></Image>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: 20,
                marginBottom: 5,
              }}
            >
              BCAA Nedir?
            </Text>
            <Text style={{ color: "#fff", textAlign: "center", padding: 8 }}>
              BCAA Nedir? İnsan vücudunda binlerce farklı protein oluşturan 20
              farklı amino asit vardır. 20'sinden 9'u, esansiyel amino asitler
              olarak kabul edilir. Esansiyel amino asitler, vücut tarafından
              sentezlenemeyen ve dışarıdan alınması gereken amino asitlerdir.
              Dokuz temel amino asitten üçü (lösin, izolösin, valin) zincirli
              amino asitler olan BCAA'lardır. BCAA; yumurta, et ve süt ürünleri
              gibi protein açısından zengin gıdalarda bulunur. Bunlar ayrıca,
              toz halinde satılan popüler bir besin takviyesi olarak da
              kullanılır.
              <Text style={{ color: "#f4311e" }}> Devamını oku -></Text>
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              backgroundColor: "#181818",
            }}
          >
            <Image
              style={{
                width: 300,
                height: 250,
                borderRadius: 10,
                marginBottom: 20,
              }}
              source={require("../../assets/images/creatine.png")}
            ></Image>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: 20,
                marginBottom: 5,
              }}
            >
              Creatine Nedir?
            </Text>
            <Text style={{ color: "#fff", textAlign: "center", padding: 8 }}>
              Kreatin, bilimsel araştırmaların desteklediği bir takım olumlu
              özellikleriyle, birçok farklı işlevi için kullanılabilen bir gıda
              takviyesidir. Kreatin, vücutta üretilebildiği gibi dışarıdan
              besinler yoluyla da alınabilir. Piyasada, kapsül ve toz şeklinde
              bulunan kreatinin en bilinen ve yaygın olan formu kreatin
              monohidrattır.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
