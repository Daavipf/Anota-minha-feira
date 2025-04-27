import { Text, View, StatusBar, FlatList } from "react-native"
import { data } from "@/data-sample"
import styles from "@/app/styles"
import colors from "@/styles/colors"
import ListCard from "@/components/list-card"
import AddListButton from "@/components/add-list-button"

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.slate[950]} />
      <View>
        <FlatList data={data} renderItem={({ item }) => <ListCard data={item} />} keyExtractor={(item) => item.id} />
      </View>
      <AddListButton />
    </View>
  )
}
