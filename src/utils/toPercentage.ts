export function toPercentage(value: number): string {
  return value.toFixed(2).replace(".", ",") + "%";
}
