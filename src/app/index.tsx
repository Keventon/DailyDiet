import { colors } from "@/types/colors";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

import Logo from "@/assets/logo.svg";
import Open from "@/assets/open.svg";
import { fontFamily } from "@/types/fontFamily";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Logo width={82} height={37} />
        <Image
          source={require("@/assets/imageProfile.jpeg")}
          style={styles.imageProfile}
        />
      </View>

      <View style={styles.contentStatistics}>
        <View style={styles.iconStatistics}>
          <Open width={24} height={24} />
        </View>
        <View style={styles.contentPercent}>
          <Text style={styles.titleStatistics}>90,86%</Text>
          <Text style={styles.subtitleStatistics}>
            das refeições dentro da dieta
          </Text>
        </View>
      </View>

      <Text style={styles.title}>Refeições</Text>

      <View style={styles.contentButton}>
        <Button title="Nova refeição" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray6,
  },
  header: {
    marginTop: 60,
    marginLeft: 24,
    marginRight: 24,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageProfileContainer: {
    borderRadius: 99,
    width: 44,
    height: 44,
    borderWidth: 2,
    borderColor: colors.gray2,
  },
  imageProfile: {
    borderRadius: 99,
    width: 44,
    height: 44,
    borderWidth: 2,
    borderColor: colors.gray2,
  },
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
  title: {
    fontFamily: fontFamily.regular,
    color: colors.gray1,
    fontSize: 16,
    marginTop: 32,
    marginLeft: 24,
  },
  contentButton: {
    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
  },
});
