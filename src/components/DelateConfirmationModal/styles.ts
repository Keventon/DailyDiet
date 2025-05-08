import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.gray7,
    padding: 24,
    width: "80%",
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 24,
  },
  title: {
    fontSize: sizes.TITLE.S,
    color: colors.gray2,
    textAlign: "center",
    fontFamily: fontFamily.bold,
  },
  button: {
    flex: 1,
  },
});
