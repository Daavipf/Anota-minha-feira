import { StyleSheet } from "react-native"
import colors from "@/styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.slate[950],
    padding: 16,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
})

export default styles
