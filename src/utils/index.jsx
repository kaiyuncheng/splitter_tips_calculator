export function currency(number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
