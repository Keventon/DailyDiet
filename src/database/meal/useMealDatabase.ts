import { useSQLiteContext } from "expo-sqlite";

export type Meal = {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  status: number;
};

export function useMealDatabase() {
  const database = useSQLiteContext();

  async function create(data: Omit<Meal, "id">) {
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
      return { isSuccessful: false, error: error };
    } finally {
      await statement.finalizeAsync();
    }
  }
  return { create };
}
