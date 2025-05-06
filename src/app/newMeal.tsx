import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function NewMeal() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.gray5}
        barStyle="dark-content"
        translucent
      />
      <Header
        percent={90.86}
        backgroundColor={colors.gray5}
        isPercent={false}
        backgroundIcon={colors.gray2}
        height={132}
        title="Nova refeição"
      />

      <View style={styles.content}>
        <View style={styles.form}>
          <Input title="Nome" />
          <Input title="Descrição" />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Input title="Data" />
            <Input title="Hora" />
          </View>
        </View>
      </View>

      <View style={{ marginHorizontal: 24 }}>
        <Text style={styles.titleFooter}>Está dentro da dieta?</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <View
            style={{
              borderRadius: 6,
              flexDirection: "row",
              backgroundColor: colors.gray6,
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
              flex: 1,
            }}
          >
            <Text>Sim</Text>
          </View>

          <View
            style={{
              borderRadius: 6,
              flexDirection: "row",
              backgroundColor: colors.gray6,
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
              flex: 1,
            }}
          >
            <Text>Não</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  form: {
    marginTop: 32,
  },
  titleFooter: {
    fontSize: sizes.TITLE.XS,
    color: colors.gray1,
    fontFamily: fontFamily.bold,
  },
});
