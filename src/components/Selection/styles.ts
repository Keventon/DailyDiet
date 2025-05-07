import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    flexDirection: "row",
    backgroundColor: colors.gray6,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    flex: 1,
    gap: 8,
  },
  icon: {
    width: 8,
    height: 8,
    borderRadius: 99,
  },
  title: {
    color: colors.gray1,
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
});
