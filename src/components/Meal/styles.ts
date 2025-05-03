import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: colors.white,
    flexDirection: "row",
    borderColor: colors.gray5,
    borderWidth: 1,
    borderRadius: 6,
    paddingTop: 14,
    paddingLeft: 12,
    paddingRight: 16,
    paddingBottom: 14,
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  hour: {
    color: colors.gray1,
    fontFamily: fontFamily.bold,
    fontSize: sizes.BODY.XS,
  },
  divider: {
    color: colors.gray4,
    fontSize: sizes.TITLE.S,
    marginTop: -4,
  },
  nameMeal: {
    color: colors.gray2,
    fontSize: sizes.BODY.M,
    maxWidth: 217,
  },
  status: {},
});
