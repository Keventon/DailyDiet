import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 144,
    backgroundColor: colors.gray6,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 99,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  icon: {
    width: 8,
    height: 8,
    borderRadius: 99,
  },
  title: {
    color: colors.gray1,
    fontFamily: fontFamily.regular,
    fontSize: sizes.BODY.S,
  },
});
