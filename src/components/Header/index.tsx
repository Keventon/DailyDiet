import { Text, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import Back from "@/assets/back.svg";
import BackRed from "@/assets/backRed.svg";
import { toPercentage } from "@/utils/toPercentage";
import { colors } from "@/types/colors";

type Props = {
  percent: number;
  status: boolean;
};

export function Header({ percent, status }: Props) {
  return (
    <View
      style={[
        styles.container,
        status
          ? { backgroundColor: colors.greenLight }
          : {
              backgroundColor: colors.redLight,
            },
      ]}
    >
      {status ? (
        <Back style={styles.iconBack} onPress={() => router.back()} />
      ) : (
        <BackRed style={styles.iconBack} onPress={() => router.back()} />
      )}

      <View style={styles.contentPercent}>
        <Text style={styles.titleStatistics}>{toPercentage(percent)}</Text>
        <Text style={styles.subtitleStatistics}>
          das refeições dentro da dieta
        </Text>
      </View>
    </View>
  );
}
