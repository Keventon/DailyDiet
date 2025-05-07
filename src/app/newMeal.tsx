import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Selection } from "@/components/Selection";
import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function NewMeal() {
  const [selectedOption, setSelectedOption] = useState<"YES" | "NO" | null>(
    null
  );

  function handleSelect(option: "YES" | "NO") {
    setSelectedOption(option);
  }

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
          <Input title="Nome" returnKeyType="next" />
          <Input
            title="Descrição"
            height={120}
            returnKeyType="next"
            multiline
          />

          <View style={styles.dateTimeRow}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Input title="Data" returnKeyType="next" />
            </View>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Input title="Hora" returnKeyType="done" />
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 24 }}>
          <Text style={styles.titleFooter}>Está dentro da dieta?</Text>
          <View style={styles.options}>
            <Selection
              title="Sim"
              backgroundColor={colors.greenDark}
              selected={selectedOption === "YES"}
              background={colors.greenLight}
              borderColor={colors.greenDark}
              onPress={() => handleSelect("YES")}
            />
            <Selection
              title="Não"
              backgroundColor={colors.redDark}
              selected={selectedOption === "NO"}
              background={colors.redLight}
              borderColor={colors.redDark}
              onPress={() => handleSelect("NO")}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="Cadastrar refeição" />
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
    marginLeft: 24,
    marginRight: 24,
  },
  dateTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleFooter: {
    fontSize: sizes.TITLE.XS,
    color: colors.gray1,
    fontFamily: fontFamily.bold,
  },
  options: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 32,
    marginLeft: 24,
    marginRight: 24,
  },
});
