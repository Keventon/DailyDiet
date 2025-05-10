import { colors } from "@/types/colors";
import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import { Header } from "@/components/Header";
import { sizes } from "@/types/sizes";
import { fontFamily } from "@/types/fontFamily";
import { StatisticRectangule } from "@/components/StatisticRectangule";
import { MealDatabase, useMealDatabase } from "@/database/meal/useMealDatabase";
import { useEffect, useState } from "react";

export default function StatisticsDetails() {
  const database = useMealDatabase();
  const [quantityMeals, setQuantityMeals] = useState(0);
  const [quantityMealsNoDiet, setquantityMealsNoDiet] = useState(0);
  const [quantityMealsDiet, setquantityMealsDiet] = useState(0);
  const [meals, setMeals] = useState<MealDatabase[]>([]);
  const [dietPercentage, setDietPercentage] = useState(0);
  const [status, setStatus] = useState(false);

  async function getAllMeals() {
    const response = await database.getAll();
    setQuantityMeals(response.meals.length);
  }

  async function fetchMeals() {
    try {
      const result = await database.getAll();
      if (result.isSuccessful) {
        setMeals(result.meals);

        const groupedMeals = result.meals.reduce((acc, meal) => {
          const date = meal.date;
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(meal);
          return acc;
        }, {} as Record<string, MealDatabase[]>);
      } else {
        Alert.alert("Erro", "Erro ao carregar refeições");
      }

      const percentageDiet = await database.getDietPercentage();
      const percentageNoDiet = await database.getNoDietPercentage();

      if (percentageDiet.isSuccessful && percentageNoDiet.isSuccessful) {
        if (
          percentageDiet.percentage > percentageNoDiet.percentage ||
          percentageDiet.percentage > 0
        ) {
          setDietPercentage(percentageDiet.percentage);
          setStatus(true);
        } else {
          setDietPercentage(percentageNoDiet.percentage);
          setStatus(false);
        }
      } else {
        setDietPercentage(0);
        Alert.alert("Erro", "Erro ao calcular estatísticas");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao processar dados");
      console.log(error);
    }
  }

  async function getNoDietMeals() {
    const response = await database.getAll();
    const filtered = response.meals.filter((meal) => meal.status === 0);
    setquantityMealsNoDiet(filtered.length);
  }

  async function getDietMeals() {
    const response = await database.getAll();
    const filtered = response.meals.filter((meal) => meal.status === 1);
    setquantityMealsDiet(filtered.length);
  }

  useEffect(() => {
    fetchMeals();
    getAllMeals();
    getNoDietMeals();
    getDietMeals();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.greenLight}
        barStyle="dark-content"
        translucent
      />

      <Header
        percent={dietPercentage}
        backgroundColor={status ? colors.greenLight : colors.redLight}
        backgroundIcon={status ? colors.greenDark : colors.redDark}
        isPercent
        height={188}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Estatísticas gerais</Text>

        <View style={styles.statistics}>
          <StatisticRectangule
            quantityMealsDiet={22}
            subtitle="melhor sequência de pratos dentro da dieta"
          />
          <StatisticRectangule
            quantityMealsDiet={quantityMeals}
            subtitle="refeições registadas"
          />
        </View>

        <View style={styles.statisticsRow}>
          <View style={{ flex: 1 }}>
            <StatisticRectangule
              quantityMealsDiet={quantityMealsDiet}
              subtitle="refeições dentro da dieta"
              backgroundColor={colors.greenLight}
            />
          </View>
          <View style={{ flex: 1 }}>
            <StatisticRectangule
              quantityMealsDiet={quantityMealsNoDiet}
              subtitle="refeições fora da dieta"
              backgroundColor={colors.redLight}
            />
          </View>
        </View>
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
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 32,
    fontSize: sizes.TITLE.XS,
    color: colors.gray1,
    fontFamily: fontFamily.bold,
  },
  statistics: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
  },
  statisticsRow: {
    flexDirection: "row",
    gap: 8,
    marginLeft: 24,
    marginRight: 24,
  },
});
