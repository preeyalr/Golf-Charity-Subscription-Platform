export const getCurrencySymbol = (currency) => {
  switch (currency) {
    case "USD": return "$";
    case "EUR": return "€";
    default: return "₹";
  }
};