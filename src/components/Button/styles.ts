import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    gap: 8,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  containerSecondary: {
    height: 50,
    flexDirection: "row",
    gap: 8,
    borderColor: colors.gray1,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {},
  title: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
  titleSecondary: {
    color: colors.gray1,
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
});
