import { useSQLiteContext } from "expo-sqlite";

export type MealDatabase = {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  status: number;
};

export function useMealDatabase() {
  const database = useSQLiteContext();

  async function create(data: Omit<MealDatabase, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO meals (name, description, date, hour, status) VALUES ($name, $description, $date, $hour, $status)"
    );

    try {
      const result = await statement.executeAsync({
        $name: data.name,
        $description: data.description,
        $date: data.date,
        $hour: data.hour,
        $status: data.status,
      });
      const insertedRowId = result.lastInsertRowId.toLocaleString();
      return { isSuccessful: true, insertedRowId };
    } catch (error) {
      return { isSuccessful: false, error };
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function getAll(): Promise<{
    isSuccessful: boolean;
    meals: MealDatabase[];
    error?: unknown;
  }> {
    try {
      const query = "SELECT * FROM meals";
      const meals = await database.getAllAsync<MealDatabase>(query);
      return { isSuccessful: true, meals };
    } catch (error) {
      return { isSuccessful: false, meals: [], error };
    }
  }

  async function findById(id: number): Promise<{
    isSuccessful: boolean;
    meal: MealDatabase | null;
    error?: unknown;
  }> {
    try {
      const query = "SELECT * FROM meals WHERE id = $id";
      const result = await database.getFirstAsync<MealDatabase>(query, {
        $id: id,
      });
      if (result) {
        return { isSuccessful: true, meal: result };
      }
      return {
        isSuccessful: false,
        meal: null,
        error: "Refeição não encontrada",
      };
    } catch (error) {
      return { isSuccessful: false, meal: null, error };
    }
  }

  async function deleteById(id: number): Promise<{
    isSuccessful: boolean;
    error?: unknown;
  }> {
    try {
      const statement = await database.prepareAsync(
        "DELETE FROM meals WHERE id = $id"
      );
      await statement.executeAsync({ $id: id });
      return { isSuccessful: true };
    } catch (error) {
      return { isSuccessful: false, error };
    }
  }

  async function getDietPercentage(): Promise<{
    isSuccessful: boolean;
    percentage: number;
    error?: unknown;
  }> {
    try {
      const result = await getAll();
      if (!result.isSuccessful) {
        return { isSuccessful: false, percentage: 0, error: result.error };
      }

      const meals = result.meals;
      if (meals.length === 0) {
        return { isSuccessful: true, percentage: 0 };
      }

      const dietMeals = meals.filter((meal) => meal.status === 1).length;
      const percentage = (dietMeals / meals.length) * 100;

      return { isSuccessful: true, percentage: percentage };
    } catch (error) {
      return { isSuccessful: false, percentage: 0, error };
    }
  }

  async function getNoDietPercentage(): Promise<{
    isSuccessful: boolean;
    percentage: number;
    error?: unknown;
  }> {
    try {
      const result = await getAll();
      if (!result.isSuccessful) {
        return { isSuccessful: false, percentage: 0, error: result.error };
      }

      const meals = result.meals;
      if (meals.length === 0) {
        return { isSuccessful: true, percentage: 0 };
      }

      const dietMeals = meals.filter((meal) => meal.status === 0).length;
      const percentage = (dietMeals / meals.length) * 100;

      return { isSuccessful: true, percentage: percentage };
    } catch (error) {
      return { isSuccessful: false, percentage: 0, error };
    }
  }

  async function update(id: number, data: Omit<MealDatabase, "id">) {
    try {
      const statement = await database.prepareAsync(
        "UPDATE meals SET name = $name, description = $description, date = $date, hour = $hour, status = $status WHERE id = $id"
      );
      await statement.executeAsync({
        $id: id,
        $name: data.name,
        $description: data.description,
        $date: data.date,
        $hour: data.hour,
        $status: data.status,
      });
      return { isSuccessful: true };
    } catch (error) {
      return { isSuccessful: false, error };
    }
  }

  return {
    create,
    getAll,
    findById,
    deleteById,
    update,
    getDietPercentage,
    getNoDietPercentage,
  };
}
