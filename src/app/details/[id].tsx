import { Button } from "@/components/Button";
import { DeleteConfirmationModal } from "@/components/DelateConfirmationModal";
import { Header } from "@/components/Header";
import { Tag } from "@/components/Tag";
import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import { MealDatabase, useMealDatabase } from "@/database/meal/useMealDatabase";

export default function MealDetails() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [meal, setMeal] = useState<MealDatabase | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const database = useMealDatabase();

  const backgroundColor =
    meal?.status === 1 ? colors.greenLight : colors.redLight;

  useEffect(() => {
    async function fetchMeal() {
      if (!id) {
        Alert.alert("Erro", "ID da refeição não fornecido");
        router.back();
        return;
      }

      try {
        const result = await database.findById(Number(id));
        if (result.isSuccessful && result.meal) {
          setMeal(result.meal);
        } else {
          Alert.alert("Erro", "Refeição não encontrada");
          router.back();
        }
      } catch (error) {
        Alert.alert("Erro", "Erro ao carregar detalhes da refeição");
        router.back();
        console.log(error);
      }
    }

    fetchMeal();
  }, [id]);

  async function handleDeleteMeal() {
    if (!meal) return;

    try {
      const result = await database.deleteById(meal.id);
      if (result.isSuccessful) {
        router.navigate("/");
      } else {
        Alert.alert("Erro", "Não foi possível excluir a refeição");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao excluir a refeição");
      console.log(error);
    }
  }

  if (!meal) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={isModalVisible ? "rgba(0,0,0,0.5)" : backgroundColor}
        barStyle="dark-content"
      />
      <Header
        backgroundColor={
          meal.status === 1 ? colors.greenLight : colors.redLight
        }
        backgroundIcon={meal.status === 1 ? colors.greenDark : colors.redDark}
        isPercent={false}
        height={132}
        title="Refeição"
      />

      <View style={styles.content}>
        <View style={styles.items}>
          <Text style={styles.titleMeal}>{meal.name}</Text>
          <Text style={styles.descriptionMeal}>{meal.description}</Text>
          <Text style={styles.titleDateMeal}>Data e hora</Text>
          <Text style={styles.dateMeal}>
            {meal.date} às {meal.hour}
          </Text>

          <Tag
            title={meal.status === 1 ? "dentro da dieta" : "fora da dieta"}
            backgroundColor={
              meal.status === 1 ? colors.greenDark : colors.redDark
            }
          />
        </View>

        <View style={styles.footer}>
          <Button
            title="Editar refeição"
            icon={<AntDesign name="edit" size={18} color={colors.white} />}
            iconVisible
            type="PRIMARY"
            // onPress={() => router.navigate(`/mealEdit/${meal.id}`)}
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
          onConfirm={handleDeleteMeal}
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
  loadingText: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray2,
    textAlign: "center",
    marginTop: 32,
  },
});
