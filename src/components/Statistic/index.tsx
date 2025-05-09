import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Open from "@/assets/open.svg";
import OpenRed from "@/assets/openRed.svg";
import { styles } from "./styles";
import { toPercentage } from "@/utils/toPercentage";

type Props = TouchableOpacityProps & {
  percent: number;
  backgroundColor?: string;
  status?: boolean;
};

export function Statistic({
  percent,
  backgroundColor,
  status,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.contentStatistics, { backgroundColor: backgroundColor }]}
      activeOpacity={0.8}
      {...rest}
    >
      <View style={styles.iconStatistics}>
        {status ? (
          <Open width={24} height={24} />
        ) : (
          <OpenRed width={24} height={24} />
        )}
      </View>
      <View style={styles.contentPercent}>
        <Text style={styles.titleStatistics}>{toPercentage(percent)}</Text>
        <Text style={styles.subtitleStatistics}>
          {status
            ? "das refeições dentro da dieta"
            : "das refeições fora da dieta"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
