import { colors } from "@/types/colors";
import {
  Image,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Logo from "@/assets/logo.svg";
import Open from "@/assets/open.svg";
import { fontFamily } from "@/types/fontFamily";
import { Button } from "@/components/Button";
import { Meal } from "@/components/Meal";
import { Statistic } from "@/components/Statistic";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        translucent
      />
      <View style={styles.header}>
        <Logo width={82} height={37} />
        <Image
          source={require("@/assets/imageProfile.jpeg")}
          style={styles.imageProfile}
        />
      </View>

      <Statistic percent={90.86} />

      <Text style={styles.title}>Refeições</Text>

      <View style={styles.contentButton}>
        <Button title="Nova refeição" iconVisible />
      </View>

      <View style={{ marginTop: 32 }}>
        <Meal hour="20:00" nameMeal="X-tudo" status={false} />
        <Meal hour="16:00" nameMeal="Whey protein com leite" status />
        <Meal hour="12:30" nameMeal="Salada cesar com frango na chapa" status />
      </View>

      {/* <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { date } }) => (
          <Text style={styles.headerSectionList}>{date}</Text>
        )}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  headerSectionList: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  titleSectionList: {
    fontSize: 24,
  },
});
