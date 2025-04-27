import { StyleSheet } from "react-native"
import colors from "@/styles/colors"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.slate[900],
    padding: 16,
    borderRadius: 16,
    elevation: 2,
    gap: 16,
    marginBottom: 16,
    paddingTop: 40,
  },
  text: {
    color: colors.white,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  date: {
    color: colors.slate[400],
  },
  length: {
    fontSize: 24,
    fontWeight: "500",
  },
  total: {
    fontSize: 30,
    fontWeight: "600",
  },
  deleteButton: {
    backgroundColor: colors.slate[700],
    borderRadius: 999,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    position: "absolute",
    right: 0,
    top: 0,
  },
})

export default styles
