import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  input: {
    height: 48,
    fontFamily: fontFamily.regular,
    fontSize: sizes.BODY.M,
    borderRadius: 6,
    borderColor: colors.gray5,
    borderWidth: 1,
    padding: 14,
  },
  title: {
    color: colors.gray2,
    fontSize: sizes.TITLE.XS,
    fontFamily: fontFamily.bold,
    marginBottom: 4,
  },
});
