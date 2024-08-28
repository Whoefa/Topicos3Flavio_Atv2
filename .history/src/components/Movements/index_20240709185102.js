import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet, 
  TouchaPrebleOpacity 
} from 'react-native';

import Feather from '@expo/vector-icons/Feather'

import { MotiView, AnimatePresence, MotiText } from "moti"

import colors from '../../theme/colors'

export default function Movements({ item }) {
  const [showValue, setShowValue] = useState(false)

  const handleItemPressed = () => {
    setShowValue(!showValue);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={ () => handleItemPressed() }
    >
      <Text style={styles.date}>{item.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{item.label}</Text>

        <Text style={item.type === 1 ? styles.value : styles.expenses}>{item.type === 1 ? `R$ ${item.value}` : `R$ -${item.value}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray_200,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },

  date: {
    color: colors.gray_200,
    fontWeight: 'bold',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  value: {
    fontSize: 16,
    color: colors.green,
    fontWeight: 'bold',
  },

  expenses: {
    fontSize: 16,
    color: colors.red,
    fontWeight: 'bold',
  }
})