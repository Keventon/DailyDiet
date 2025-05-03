import { Text, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import Back from "@/assets/back.svg";
import BackRed from "@/assets/backRed.svg";
import { toPercentage } from "@/utils/toPercentage";

type Props = {
  percent: number;
};

export function Header({ percent }: Props) {
  return (
    <View style={styles.container}>
      <Back style={styles.iconBack} onPress={() => router.back()} />

      <View style={styles.contentPercent}>
        <Text style={styles.titleStatistics}>{toPercentage(percent)}</Text>
        <Text style={styles.subtitleStatistics}>
          das refeições dentro da dieta
        </Text>
      </View>
    </View>
  );
}
