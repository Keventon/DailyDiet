import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./styles";
import { colors } from "@/types/colors";

type Props = TouchableOpacityProps & {
  title: string;
  backgroundColor?: string;
  background?: string;
  borderColor?: string;
  selected?: boolean;
};

export function Selection({
  title,
  backgroundColor,
  background,
  selected,
  borderColor,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        styles.container,
        {
          backgroundColor: selected ? background : colors.gray6,
          borderColor: borderColor,
          borderWidth: selected ? 1 : 0,
        },
      ]}
      {...rest}
    >
      <View
        style={[
          styles.icon,
          { backgroundColor: backgroundColor, borderRadius: 99 },
        ]}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
