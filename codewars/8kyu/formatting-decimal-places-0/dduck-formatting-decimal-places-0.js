// formatting-decimal-places-0
// Formatting decimal places #0
// difficulty: 8kyu
// https://www.codewars.com/kata/5641a03210e973055a00000d

const twoDecimalPlaces = (n) => Number(n.toFixed(2));



console.log(twoDecimalPlaces(4.659725356), 4.66, "didn't work for 4.659725356");
console.log(twoDecimalPlaces(173735326.3783732637948948), 173735326.38, "didn't work for 173735326.3783732637948948");
console.log(twoDecimalPlaces(4.653725356), 4.65, "didn't work for 4.653725356");
