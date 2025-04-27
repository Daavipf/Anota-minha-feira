import { Text, View, TouchableOpacity } from "react-native"
import React from "react"
import styles from "./styles"
import { useNavigation } from "expo-router"
import { AntDesign } from "@expo/vector-icons"
import colors from "@/styles/colors"

export default function index() {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log("Add List Button Pressed")}>
      <AntDesign name="plus" size={24} color={colors.white} />
    </TouchableOpacity>
  )
}
