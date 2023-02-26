export const getRandomString = (): string => {
  var chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  var charLength = chars.length;
  var result = "";
  for (var i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
};
