import { Button } from "@/components/Button";
import { CustomModal } from "@/components/CustomModal";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Selection } from "@/components/Selection";
import { colors } from "@/types/colors";
import { fontFamily } from "@/types/fontFamily";
import { sizes } from "@/types/sizes";
import { useEffect, useState } from "react";
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format, parse } from "date-fns";
import { router, useLocalSearchParams } from "expo-router";

import Ilustration from "@/assets/illustration.svg";
import IlustrationTwo from "@/assets/illustrationTwo.svg";
import { MealDatabase, useMealDatabase } from "@/database/meal/useMealDatabase";

export default function mealEdit() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedOption, setSelectedOption] = useState<"YES" | "NO" | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [meal, setMeal] = useState<MealDatabase | null>(null);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [showHourPicker, setShowHourPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const database = useMealDatabase();

  function handleSelect(option: "YES" | "NO") {
    setSelectedOption(option);
  }

  function handleOpenModal() {
    if (selectedOption) {
      setIsModalVisible(true);
    }
  }

  function handleNavigateHome() {
    setIsModalVisible(false);
    router.push("/");
  }

  function handleUpdateMealDatabase() {
    if (!name || !description || !date || !hour || !selectedOption) {
      return Alert.alert("Atenção", "Preencha todos os campos.");
    }

    const status = selectedOption === "YES" ? 1 : 0;

    database
      .update(Number(id), {
        name,
        description,
        date,
        hour,
        status,
      })
      .then(() => {
        setIsModalVisible(true);
      })
      .catch((error) => {
        Alert.alert(
          "Erro",
          "Não foi possível salvar refeição, tente novamente"
        );
        console.log(error);
      });
  }

  function handleTimeChange(event: any, selectedTime?: Date) {
    setShowHourPicker(Platform.OS === "ios");
    if (selectedTime) {
      const hours = selectedTime.getHours().toString().padStart(2, "0");
      const minutes = selectedTime.getMinutes().toString().padStart(2, "0");
      setHour(`${hours}:${minutes}`);
    }
  }

  function handleDateChange(event: any, selectedDate?: Date) {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      const formattedDate = format(selectedDate, "dd/MM/yyyy");
      setDate(formattedDate);
    }
  }

  const modalConfig =
    selectedOption === "YES"
      ? {
          title: "Continue assim!",
          subtitle: "Você continua dentro da dieta. Muito bem!",
          svgComponent: <Ilustration />,
          colorTitle: colors.greenDark,
        }
      : selectedOption === "NO"
      ? {
          title: "Que pena!",
          subtitle:
            "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!",
          svgComponent: <IlustrationTwo />,
          colorTitle: colors.redDark,
        }
      : null;

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
          setSelectedOption(result.meal.status === 1 ? "YES" : "NO");
          setName(result.meal.name);
          setDescription(result.meal.description);
          setDate(result.meal.date);
          setHour(result.meal.hour);
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

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={isModalVisible ? colors.white : colors.gray5}
        barStyle="dark-content"
        translucent
      />
      <Header
        percent={90.86}
        backgroundColor={colors.gray5}
        isPercent={false}
        backgroundIcon={colors.gray2}
        height={132}
        title="Editar refeição"
      />

      <View style={styles.content}>
        <View style={styles.form}>
          <Input
            title="Nome"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
          />
          <Input
            title="Descrição"
            height={120}
            returnKeyType="next"
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <View style={styles.dateTimeRow}>
            <Pressable
              onPress={() => setShowDatePicker(true)}
              style={{ flex: 1, marginRight: 8 }}
            >
              <Input
                title="Data"
                editable={false}
                pointerEvents="none"
                value={date}
              />
            </Pressable>

            <Pressable
              onPress={() => setShowHourPicker(true)}
              style={{ flex: 1, marginLeft: 8 }}
            >
              <Input
                title="Hora"
                editable={false}
                pointerEvents="none"
                value={hour}
              />
            </Pressable>
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
        <Button
          title="Salvar alterações"
          onPress={handleUpdateMealDatabase}
          type="PRIMARY"
        />
      </View>

      {modalConfig && (
        <CustomModal
          visible={isModalVisible}
          onPress={handleNavigateHome}
          title={modalConfig.title}
          subtitle={modalConfig.subtitle}
          svgComponent={modalConfig.svgComponent}
          colorTitle={modalConfig.colorTitle}
        />
      )}

      {showHourPicker && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
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
    marginTop: -16,
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
