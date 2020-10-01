// decibel-scale
// Decibel Scale
// difficulty: 8kyu
// https://www.codewars.com/kata/5612a42e746aa62de100001ao/

const dBScale = (intensity) => 10 * Math.log10(intensity / (10 ** -12));


console.log(Math.round(dBScale(Math.pow(10, -11))), 10);
