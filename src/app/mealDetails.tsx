import { Button } from "@/components/Button";
import { DeleteConfirmationModal } from "@/components/DelateConfirmationModal";
import { Header } from "@/components/Header";
import { Tag } from "@/components/Tag";
import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function MealDetails() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={isModalVisible ? "rgba(0,0,0,0.5)" : colors.greenLight}
        barStyle="dark-content"
      />
      <Header
        backgroundColor={colors.greenLight}
        backgroundIcon={colors.greenDark}
        isPercent={false}
        height={132}
        title="Refeição"
      />

      <View style={styles.content}>
        <View style={styles.items}>
          <Text style={styles.titleMeal}>Sanduíche</Text>
          <Text style={styles.descriptionMeal}>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Text>
          <Text style={styles.titleDateMeal}>Data e hora</Text>
          <Text style={styles.dateMeal}>12/12/2022 às 12:00</Text>

          <Tag title="dentro da dieta" backgroundColor={colors.greenDark} />
        </View>

        <View style={styles.footer}>
          <Button
            title="Editar refeição"
            icon={<AntDesign name="edit" size={18} color={colors.white} />}
            iconVisible
            type="PRIMARY"
            onPress={() => router.navigate("/mealEdit")}
          />
          <Button
            title="Excluir refeição"
            type="SECONDARY"
            icon={<AntDesign name="delete" size={18} color={colors.gray1} />}
            iconVisible
            onPress={() => setIsModalVisible(true)}
          />
        </View>
        <DeleteConfirmationModal
          visible={isModalVisible}
          onConfirm={() => setIsModalVisible(false)}
          title="Deseja realmente excluir o registro da refeição?"
          onCancel={() => setIsModalVisible(false)}
        />
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
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  items: {
    marginTop: 32,
    marginLeft: 24,
    marginRight: 24,
  },
  titleMeal: {
    fontSize: 20,
    color: colors.gray1,
    fontFamily: fontFamily.bold,
  },
  descriptionMeal: {
    marginTop: 8,
    fontSize: sizes.BODY.M,
    color: colors.gray2,
    fontFamily: fontFamily.regular,
  },
  titleDateMeal: {
    marginTop: 32,
    fontSize: sizes.TITLE.XS,
    color: colors.gray1,
    fontFamily: fontFamily.bold,
  },
  dateMeal: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: sizes.BODY.M,
    color: colors.gray2,
    fontFamily: fontFamily.regular,
  },
  footer: {
    flex: 1,
    gap: 8,
    justifyContent: "flex-end",
    marginBottom: 40,
    marginLeft: 24,
    marginRight: 24,
  },
});
