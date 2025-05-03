import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentStatistics: {
    height: 102,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 8,
    backgroundColor: colors.greenLight,
    marginTop: 24,
  },
  iconStatistics: {
    alignItems: "flex-end",
    marginRight: 12,
    marginTop: 8,
  },
  contentPercent: {
    marginTop: -12,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStatistics: {
    fontSize: 32,
    color: colors.gray1,
    fontFamily: fontFamily.bold,
  },
  subtitleStatistics: {
    fontSize: 14,
    color: colors.gray2,
    fontFamily: fontFamily.regular,
  },
});
