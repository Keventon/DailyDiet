import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/types/colors";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.greenDark} />
    </View>
  );
}
