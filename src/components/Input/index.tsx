import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/types/colors";

type Props = TextInputProps & {
  title: string;
  height?: number;
};

export function Input({ title, height, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        textAlignVertical="top"
        cursorColor={colors.gray2}
        placeholderTextColor={colors.gray2}
        selectionColor={colors.gray2}
        style={[styles.input, { height: height }]}
        {...rest}
      />
    </View>
  );
}
