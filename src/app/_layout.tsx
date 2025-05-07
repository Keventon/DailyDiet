import { Stack } from "expo-router";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Loading } from "@/components/Loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="statistics" />
      <Stack.Screen name="statisticsDetails" />
      <Stack.Screen name="newMeal" />
      <Stack.Screen name="mealDetails" />
    </Stack>
  );
}
