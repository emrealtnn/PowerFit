import  React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';



export default class VkiCalScreen extends React.Component {
    state = {
        height: 0,
        mass: 0,
        resultNumber: 0,
        resultText: ""
    };

    handleCalculate = () => {
        let imc = (this.state.mass * 703) / this.state.height ** 2;
        this.setState({
            resultNumber: imc.toFixed(2)
        });

        if (imc < 18.5) {
            this.setState({ resultText: "Düşük Kilo" });
        } else if (imc > 18.5 && imc < 25) {
            this.setState({ resultText: "Normal Kilo" });
        } else if (imc >= 25 && imc < 30) {
            this.setState({ resultText: "kilolu" });
        } else {
            this.setState({ resultText: "Obez" });
        }
    };

    render() {
        return (

                <SafeAreaView style={styles.container}>

                    <View style={styles.intro}>
                        <Text style={{color:'#F4311E',fontSize:20,paddingLeft:24,paddingBottom:10}}>Kilo Giriniz</Text>
                        <TextInput
                            placeholder="Örnek: 70"
                            keyboardType="numeric"
                            style={styles.input}
                            onChangeText={height => {
                                this.setState({ height });
                            }}
                        />
                        <Text style={{color:'#F4311E',fontSize:20,paddingLeft:24,paddingBottom:10}}>Boy Giriniz</Text>
                        <TextInput
                            placeholder="Örnek: 180"
                            keyboardType="numeric"
                            style={styles.input}
                            onChangeText={mass => {
                                this.setState({ mass });
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.handleCalculate}
                    >
                        <Text style={styles.buttonText}>Hesapla </Text>
                    </TouchableOpacity>
                    <Text style={styles.result}>{this.state.resultNumber}</Text>
                    <Text style={[styles.result, { fontSize: 35 }]}>
                        {this.state.resultText}
                    </Text>
                </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    intro: {
        marginTop: 150,
    },
    input: {
        backgroundColor:"#181818",
        borderRadius:10,
        marginHorizontal: 20,
        padding: 20,
        fontSize: 20,
        marginBottom: 24,
        color: "#FFF"
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#F4311e",
        marginHorizontal: 20,
    },
    buttonText: {
        alignSelf: "center",
        padding: 20,
        fontSize: 25,
        color: "#fff",

    },
    result: {
        alignSelf: "center",
        color: "#F4311E",
        fontSize: 65,
        padding: 15
    }
});