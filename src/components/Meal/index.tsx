import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./styles";

import StatuRed from "@/assets/statusRed.svg";
import StatusGreen from "@/assets/statusGreen.svg";

type Props = TouchableOpacityProps & {
  hour: string;
  nameMeal: string;
  status: boolean;
};

export function Meal({ hour, nameMeal, status, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container} {...rest}>
      <View style={styles.content}>
        <Text style={styles.hour}>{hour}</Text>
        <Text style={styles.divider}>|</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.nameMeal}>
          {nameMeal}
        </Text>
      </View>

      <View style={styles.status}>
        {status ? <StatusGreen /> : <StatuRed />}
      </View>
    </TouchableOpacity>
  );
}
