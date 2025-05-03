import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  quantityMealsDiet: number;
  subtitle: string;
  backgroundColor?: string;
};

export function StatisticRectangule({
  quantityMealsDiet,
  subtitle,
  backgroundColor,
}: Props) {
  return (
    <View
      style={[styles.container, backgroundColor ? { backgroundColor } : {}]}
    >
      <Text style={styles.title}>{quantityMealsDiet}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
