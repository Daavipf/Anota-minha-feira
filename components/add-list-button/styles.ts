import colors from "@/styles/colors"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue[700],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    width: 56,
    height: 56,
    elevation: 4,
    position: "absolute",
    bottom: 16,
    right: 16,
  },
})

export default styles
