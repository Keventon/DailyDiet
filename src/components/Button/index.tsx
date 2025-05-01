import { colors } from "@/types/colors";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest} style={styles.container}>
      <View style={styles.content}>
        <MaterialIcons name="add" size={24} color={colors.white} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
