import { Text, View, TouchableOpacity } from "react-native"
import React from "react"
import { List } from "@/data-sample"
import { getFormattedDate } from "@/helpers/getFormattedDate"
import styles from "./styles"
import Feather from "@expo/vector-icons/Feather"
import colors from "@/styles/colors"
import ModalComponent from "../modal"

interface ListCardProps {
  data: List
}

export default function ListCard({ data }: ListCardProps) {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false)

  function getCurrencyFormat(value: number) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    })
  }

  function handleDelete() {
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} listId={data.id} />
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Feather name="x" size={14} color={colors.white} />
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={[styles.text, styles.title]}>{data.title}</Text>
        <Text style={[styles.text, styles.date]}>{getFormattedDate(data.date)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.text, styles.length]}>{data.items.length} itens</Text>
        <Text style={[styles.text, styles.total]}>{getCurrencyFormat(data.total)}</Text>
      </View>
    </View>
  )
}
