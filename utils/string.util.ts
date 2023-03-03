export const clearTurkishChars = (val: string) => {
  let cleanedVal = "";
  const letters = { İ: "i", I: "i", Ş: "s", Ğ: "g", Ü: "u", Ö: "o", Ç: "c" };
  cleanedVal = val.replace(/[İIıŞşĞğÜüÇçÖö]/g, (letter) => {
    if (typeof letter == "string") {
      return letters[letter.toUpperCase()];
    }
  });
  return cleanedVal.toLowerCase().trim();
};

export const capitalizeFirstLetter = (val: string): string => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};
