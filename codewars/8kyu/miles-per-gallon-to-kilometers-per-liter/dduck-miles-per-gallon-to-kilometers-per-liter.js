// miles-per-gallon-to-kilometers-per-liter
// Miles per gallon to kilometers per liter
// difficulty: 8kyu
// https://www.codewars.com/kata/557b5e0bddf29d861400005d/

const IMPERIAL_GALLON_TO_LITERS = 4.54609188;
const MILE_TO_KILOMETERS = 1.609344;

const converter = (mpg) => {
  return Number(
    String(
      ((mpg * MILE_TO_KILOMETERS) / IMPERIAL_GALLON_TO_LITERS).toFixed(2)
    )
  );
};



console.log(converter(10), 3.54);
console.log(converter(20), 7.08);
console.log(converter(30), 10.62);
