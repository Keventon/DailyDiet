import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  centeredView: {
    alignItems: "center",
  },
  image: {
    marginBottom: 32,
  },
  title: {
    fontSize: sizes.TITLE.M,
    fontFamily: fontFamily.bold,
    marginBottom: 8,
    color: colors.greenDark,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: sizes.BODY.M,
    marginBottom: 20,
    marginHorizontal: 24,
    textAlign: "center",
  },
  button: {
    marginHorizontal: 106,
  },
});
