import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 89,
    borderRadius: 8,
    backgroundColor: colors.gray7,
    marginBottom: 16,
    justifyContent: "center",
    padding: 14,
  },
  title: {
    fontSize: sizes.TITLE.M,
    color: colors.gray1,
    textAlign: "center",
    fontFamily: fontFamily.bold,
  },
  subtitle: {
    fontSize: sizes.BODY.S,
    color: colors.gray2,
    fontFamily: fontFamily.regular,
    textAlign: "center",
  },
});
