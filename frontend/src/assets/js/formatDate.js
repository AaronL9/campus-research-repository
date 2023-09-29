export default function formatDate(dateString) {
  const dateObject = new Date(dateString);

  const options = { year: "numeric", month: "long", day: "numeric" };

  return dateObject.toLocaleString(undefined, options);;
}

export function formatDateToDDMMYYYY(dateString) {
  const date = new Date(dateString);

  // Get day, month, and year components
  const day = String(date.getDate()).padStart(2, "0"); // Zero-padding for single-digit days
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  // Combine components with hyphens
  return `${month}/${day}/${year}`;
}
