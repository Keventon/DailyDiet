import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
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
  title: {
    fontSize: sizes.TITLE.S,
    color: colors.gray1,
    textAlign: "center",
    flex: 1,
    fontFamily: fontFamily.bold,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 24,
    marginRight: 24,
  },
  containerTitle: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  iconBackTitle: {
    width: 24,
  },
});
