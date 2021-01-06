export const StyledDate = () => {
  const newDate = new Date();
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const fullDate =
    newDate.getDate() +
    " " +
    months[newDate.getMonth()] +
    " " +
    newDate.getFullYear();
  return fullDate;
};

export default StyledDate;
