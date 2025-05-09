import { colors } from "@/types/colors";
import {
  Alert,
  Image,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Logo from "@/assets/logo.svg";
import { fontFamily } from "@/types/fontFamily";
import { Button } from "@/components/Button";
import { Meal } from "@/components/Meal";
import { Statistic } from "@/components/Statistic";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { MealDatabase, useMealDatabase } from "@/database/meal/useMealDatabase";

type MealSection = {
  date: string;
  data: MealDatabase[];
};

export default function Home() {
  const [meals, setMeals] = useState<MealDatabase[]>([]);
  const [sections, setSections] = useState<MealSection[]>([]);
  const [dietPercentage, setDietPercentage] = useState<number>(0);
  const database = useMealDatabase();

  function handleScreenStatisticsDetails() {
    router.navigate("/statisticsDetails");
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

        const sectionsData: MealSection[] = Object.keys(groupedMeals)
          .sort((a, b) => b.localeCompare(a))
          .map((date) => ({
            date,
            data: groupedMeals[date],
          }));

        setSections(sectionsData);
      } else {
        Alert.alert("Erro", "Erro ao carregar refeições");
      }

      const percentageResult = await database.getDietPercentage();
      if (percentageResult.isSuccessful) {
        setDietPercentage(percentageResult.percentage);
      } else {
        setDietPercentage(0);
        Alert.alert("Erro", "Erro ao calcular estatísticas");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao processar dados");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, []);

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

      <Statistic
        backgroundColor={
          dietPercentage >= 50 ? colors.greenLight : colors.redLight
        }
        percent={dietPercentage}
        onPress={handleScreenStatisticsDetails}
      />

      <Text style={styles.title}>Refeições</Text>

      <View style={styles.contentButton}>
        <Button
          title="Nova refeição"
          iconVisible
          type="PRIMARY"
          icon={<MaterialIcons name="add" size={18} color={colors.white} />}
          onPress={() => router.navigate("/newMeal")}
        />
      </View>

      <SectionList
        showsVerticalScrollIndicator={false}
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Meal
            hour={item.hour}
            nameMeal={item.name}
            status={!!item.status}
            onPress={() => router.navigate("/mealDetails")}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <Text style={styles.headerSectionList}>{date}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 32 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma refeição cadastrada.</Text>
        }
      />
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
  headerSectionList: {
    fontSize: 18,
    fontFamily: fontFamily.bold,
    color: colors.gray1,
    backgroundColor: colors.white,
    paddingLeft: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  emptyText: {
    fontFamily: fontFamily.regular,
    color: colors.gray2,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
