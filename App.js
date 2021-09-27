import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [amount, setAmount] = useState(0);

  const [buyPrice, setBuyPrice] = useState(0);

  const [sellPrice, setSellPrice] = useState(0);

  const [profit, setProfit] = useState(0);

  const [profitPercentage, setProfitPercentage] = useState(0);

  const [totalMoney, setTotalMoney] = useState(0);

  useEffect(() => {
    getProfit(amount, buyPrice, sellPrice);
    getProfitPercentage(amount, buyPrice, sellPrice);
    getTotalMoney(amount, buyPrice, sellPrice);
  });

  const handleAmountInputChange = (text) => {
    //If statement to only allow numbers to be added
    setAmount(text);
  };

  const handleBuyPriceInputChange = (text) => {
    setBuyPrice(text);
  };

  const handleSellPriceInputChange = (text) => {
    setSellPrice(text);
  };

  const getProfit = (amount, buyPrice, sellPrice) => {
    const profit = (sellPrice / buyPrice) * amount - amount;
    const profitCheck = isFinite(profit) ? profit : 0;
    setProfit(profitCheck || 0);
  };

  const getProfitPercentage = (amount, buyPrice, sellPrice) => {
    const profit = (sellPrice / buyPrice) * amount - amount;
    const profitCheck = isFinite(profit) ? profit : 0;
    const profitPercentage = (profitCheck / amount) * 100;
    setProfitPercentage(profitPercentage || 0);
  };

  const getTotalMoney = (amount, buyPrice, sellPrice) => {
    const profit = (sellPrice / buyPrice) * amount - amount;
    const profitCheck = isFinite(profit) ? profit : 0;
    const totalMoney = parseFloat(profitCheck) + parseFloat(amount);
    setTotalMoney(totalMoney || 0);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Crypto Profit Calculator</Text>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.subHeading}>Trade Details:</Text>
        </View>

        <View style={styles.rowContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.keyText}>Amount:</Text>
          </View>

          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={amount == 0 ? "" : amount.toString()}
              onChangeText={(text) => handleAmountInputChange(text)}
            />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.keyText}>Buy Price:</Text>
          </View>

          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={amount == 0 ? "" : buyPrice.toString()}
              onChangeText={(text) => handleBuyPriceInputChange(text)}
            />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.keyText}>Sell Price:</Text>
          </View>

          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={amount == 0 ? "" : sellPrice.toString()}
              onChangeText={(text) => handleSellPriceInputChange(text)}
            />
          </View>
        </View>
      </View>

      <View style={styles.resultsContainer}>
        <View>
          <Text style={styles.subHeading}>Results:</Text>
        </View>

        <View style={styles.rowContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.keyText}>Profit:</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={profit >= 0 ? styles.profitResults : styles.lossResults}
            >
              {parseFloat(profit).toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.keyText}>Profit %:</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={
                profitPercentage >= 0
                  ? styles.profitResults
                  : styles.lossResults
              }
            >
              {parseFloat(profitPercentage).toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.keyText}>Total Money:</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={
                totalMoney >= amount || totalMoney == 0
                  ? styles.profitResults
                  : styles.lossResults
              }
            >
              {parseFloat(totalMoney).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f1c",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: "#232232",
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 20,
    width: "80%",
    margin: 20,
  },
  resultsContainer: {
    backgroundColor: "#232232",
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 20,
    width: "80%",
    margin: 20,
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  keyText: {
    justifyContent: "flex-start",
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  textInput: {
    justifyContent: "flex-end",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginTop: -10,
    color: "white",
    fontSize: 15,
  },
  results: {
    justifyContent: "flex-end",
    color: "white",
    fontSize: 15,
  },
  lossResults: {
    justifyContent: "flex-end",
    color: "#FF0000",
    fontSize: 15,
  },
  profitResults: {
    justifyContent: "flex-end",
    color: "#90EE90",
    fontSize: 15,
  },
  heading: {
    color: "white",
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: "800",
  },
  subHeading: {
    color: "white",
    fontSize: 18,
    paddingBottom: 30,
    textDecorationLine: "underline",
  },
});
