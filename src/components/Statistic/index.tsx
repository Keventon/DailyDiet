import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Open from "@/assets/open.svg";
import { styles } from "./styles";
import { toPercentage } from "@/utils/toPercentage";

type Props = TouchableOpacityProps & {
  percent: number;
};

export function Statistic({ percent, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.contentStatistics}
      activeOpacity={0.8}
      {...rest}
    >
      <View style={styles.iconStatistics}>
        <Open width={24} height={24} />
      </View>
      <View style={styles.contentPercent}>
        <Text style={styles.titleStatistics}>{toPercentage(percent)}</Text>
        <Text style={styles.subtitleStatistics}>
          das refeições dentro da dieta
        </Text>
      </View>
    </TouchableOpacity>
  );
}
