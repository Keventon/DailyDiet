import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
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
    <TouchableOpacity activeOpacity={0.9} style={styles.container} {...rest}>
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
