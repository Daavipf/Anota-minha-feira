export function getFormattedDate(date: string): string {
  const [day, month, year] = date.split("-").map(Number)
  const dateObj = new Date(year, month - 1, day)
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }
  return dateObj.toLocaleDateString("pt-BR", options)
}
