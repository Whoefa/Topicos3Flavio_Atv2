import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import colors from "../../theme/colors";

export default function Actions({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Pressable style={styles.actionButton} onPress={() => navigation.navigate('Entradas')}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={28} color={colors.brownDark} />
        </View>
        <Text style={styles.labelButton}>Entrada</Text>
      </Pressable>
      
      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={28} color={colors.brownDark} />
        </View>
        <Text style={styles.labelButton}>Saídas</Text>
      </Pressable>

      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={28} color={colors.brownDark} />
        </View>
        <Text style={styles.labelButton}>Wallet</Text>
      </Pressable>

      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={28} color={colors.brownDark} />
        </View>
        <Text style={styles.labelButton}>Bills</Text>
      </Pressable>

      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={28} color={colors.brownDark} />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </Pressable>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    maxHeight: 100,
    marginBottom: 14,
    marginTop: 18,
    paddingStart: 14,
    paddingEnd: 14,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 28,
  },
  areaButton: {
    backgroundColor: colors.brownLight,
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  labelButton: {  
    marginTop: 6,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.brownDark,
    fontSize: 14,
  },
});
