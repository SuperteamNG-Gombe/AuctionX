export function formatCurrency(
  amount: number,
  currency: "NGN" | "USD" = "NGN"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}
