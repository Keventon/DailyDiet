import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 188,
    backgroundColor: colors.greenLight,
  },
  iconBack: {
    marginTop: 60,
    marginLeft: 24,
  },
  contentPercent: {
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
