import { StyleSheet } from "react-native"
import colors from "@/styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(2, 6, 23, 0.75)",
  },
  modalContainer: {
    width: "90%",
    height: "25%",
    justifyContent: "space-between",
    backgroundColor: colors.slate[900],
    borderRadius: 16,
    padding: 16,
    elevation: 2,
  },
  text: {
    color: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    padding: 16,
    backgroundColor: colors.slate[700],
  },
  buttonCancel: {
    backgroundColor: colors.cancel,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
})

export default styles
