import { StyleSheet, Text, View, Modal, TouchableOpacity, Alert } from "react-native"
import React from "react"
import styles from "./styles"

interface ModalComponentProps {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  listId: string
}

export default function ModalComponent({ modalVisible, setModalVisible, listId }: ModalComponentProps) {
  function handleDelete() {
    setModalVisible(false)
    Alert.alert(`Lista ${listId} excluída`)
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Text style={[styles.text, styles.title]}>Deseja excluir esta lista?</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={handleDelete}>
              <Text style={styles.text}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
