import { ActivityIndicator, StatusBar, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/types/colors";

export function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.gray7} barStyle="dark-content" />
      <ActivityIndicator size="large" color={colors.greenDark} />
    </View>
  );
}
