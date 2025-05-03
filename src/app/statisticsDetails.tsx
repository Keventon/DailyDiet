import { colors } from "@/types/colors";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Back from "@/assets/back.svg";
import { router } from "expo-router";
import { Header } from "@/components/Header";
import { sizes } from "@/types/sizes";
import { fontFamily } from "@/types/fontFamily";

export default function StatisticsDetails() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.greenLight}
        barStyle="dark-content"
        translucent
      />

      <Header percent={90.86} />

      <View style={styles.content}>
        <Text style={styles.title}>Estatísticas gerais</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  title: {
    marginTop: 32,
    fontSize: sizes.TITLE.XS,
    color: colors.gray1,
    fontFamily: fontFamily.bold,
  },
});
