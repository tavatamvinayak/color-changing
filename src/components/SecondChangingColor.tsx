import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function SecondChangingColor(): JSX.Element {
  const [randomBackground_1, setRandomBackground_1] = useState("#ffffff");
  const [randomBackground_2, setRandomBackground_2] = useState("#ffffff");
  const [randomBackground_3, setRandomBackground_3] = useState("#ffffff");
  const [randomBackground_4, setRandomBackground_4] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color = color + hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const HOF = () => {
    const color_1 = generateColor();
    const color_2 = generateColor();
    const color_3 = generateColor();
    const color_4 = generateColor();
    setRandomBackground_1(color_1);
    setRandomBackground_2(color_2);
    setRandomBackground_3(color_3);
    setRandomBackground_4(color_4);
  };

  return (
    <SafeAreaView style={{marginTop:'10%'}}>
      <ScrollView>
        <View>
        <View
          style={[
            styles.container,
            { marginBottom:'10%'},
          ]}
        >
            <TouchableOpacity onPress={() => HOF()}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Four color Changing </Text>
            </View>
          </TouchableOpacity>
          
        </View>
        <View>
            <View style={{ height: 100,backgroundColor: randomBackground_1}}>
                <Text style={{color:'white',textAlign:'center'}}>First Color</Text>
            </View>
        
            <View style={{   height: 100, backgroundColor: randomBackground_2}}>
                <Text style={{color:'white',textAlign:'center'}}>Second color</Text>
            </View>
            <View style={{   height: 100, backgroundColor: randomBackground_3}}>
                <Text style={{color:'white',textAlign:'center'}}>Third color</Text>
            </View>
            <View style={{   height: 100, backgroundColor: randomBackground_4}}>
                <Text style={{color:'white',textAlign:'center'}}>Fourth color</Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
});

export default SecondChangingColor;
