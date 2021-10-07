import React from "react";
import { Alert, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    minWidth: 80,
    maxWidth: 120,
    minHeight: 35,
    backgroundColor: 'lightcyan',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    padding: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'lightskyblue'
  },
  text: {
    textAlign: 'center'
  }
})

export default Button = ({style, text = "내용없음", onPress = () => { Alert.alert('없음', "내용을 입력해 주세용.")}}) => {

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}