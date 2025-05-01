import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.gray2,
    borderRadius: 6,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },
  title: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
});
