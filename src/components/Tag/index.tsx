import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  backgroundColor?: string;
};

export function Tag({ title, backgroundColor }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: backgroundColor }]} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
