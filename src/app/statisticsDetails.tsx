import { colors } from "@/types/colors";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Header } from "@/components/Header";
import { sizes } from "@/types/sizes";
import { fontFamily } from "@/types/fontFamily";
import { StatisticRectangule } from "@/components/StatisticRectangule";

export default function StatisticsDetails() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.greenLight}
        barStyle="dark-content"
        translucent
      />

      <Header percent={90.86} status />

      <View style={styles.content}>
        <Text style={styles.title}>Estatísticas gerais</Text>
      </View>

      <View style={styles.statistics}>
        <StatisticRectangule
          quantityMealsDiet={22}
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <StatisticRectangule
          quantityMealsDiet={109}
          subtitle="refeições registadas"
        />
      </View>

      <View style={styles.statisticsRow}>
        <StatisticRectangule
          quantityMealsDiet={99}
          subtitle="refeições dentro da dieta"
          backgroundColor={colors.greenLight}
        />
        <StatisticRectangule
          quantityMealsDiet={10}
          subtitle="refeições fora da dieta"
          backgroundColor={colors.redLight}
        />
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
    alignItems: "center",
  },
  title: {
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
    justifyContent: "space-between",
    marginLeft: 24,
    marginRight: 24,
  },
});
