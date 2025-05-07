import { colors } from "@/types/colors";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  iconVisible?: boolean;
  icon?: React.ReactNode;
  backgroundColor?: string;
  type: "PRIMARY" | "SECONDARY";
};

export function Button({
  title,
  backgroundColor,
  iconVisible = false,
  icon,
  type,
  ...rest
}: Props) {
  return type === "PRIMARY" ? (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.container,
        { backgroundColor: backgroundColor ? backgroundColor : colors.gray2 },
      ]}
      {...rest}
    >
      {iconVisible && icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.containerSecondary]}
      {...rest}
    >
      {iconVisible && icon}
      <Text style={styles.titleSecondary}>{title}</Text>
    </TouchableOpacity>
  );
}
