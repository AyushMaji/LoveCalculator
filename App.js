import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";

// //////////////////////////////////////csss

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
  },
});
// //////////////////////////////////////csss

// ====================================================componenet

const App = () => {
  const [text, setText] = React.useState("");
  const [textdata, setTextdata] = React.useState("");
  const [per, setupdateper] = React.useState("0");
  const [comment, setcomment] = React.useState("good Luck");

  const calculate = () => {
    const male = text;
    const female = textdata;

    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${male}&sname=${textdata}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "0aa481794fmsh6ed8e306026dd98p177c95jsn46c93e4cc6ef",
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        },
      }
    )
      .then((data) => data.json())
      .then((data2) => {
        const persentage = data2.percentage;
        const result = data2.result;
        setupdateper(persentage);
        setcomment(result);
      });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content
          title="Love calculator"
          style={{ alignItems: "center" }}
        />
      </Appbar.Header>

      <TextInput
        Type="outlined"
        label="Male"
        value={text}
        onChangeText={(text) => setText(text)}
        style={{ margin: 20 }}
      />
      <TextInput
        label="Female"
        value={textdata}
        onChangeText={(text) => setTextdata(text)}
        style={{ margin: 20 }}
      />

      <Button
        mode="contained"
        style={{ margin: 10, backgroundColor: "blue", borderRadius: 15 }}
        onPress={calculate}
      >
        claculate
      </Button>

      <Text
        style={{
          marginTop: 40,

          borderRadius: 100,
          textAlign: "center",
          fontSize: 55,
          alignItems: "center",
        }}
      >
        {per + "%"}
      </Text>

      <Text
        style={{
          marginTop: 15,
          borderRadius: 100,
          textAlign: "center",
          fontSize: 30,
          alignItems: "center",
          color: "red",
        }}
      >
        {comment}
      </Text>
    </View>
  );
};
export default App;

// ====================================================componenet
