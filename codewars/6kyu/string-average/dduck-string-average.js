// string-average
// String average
// difficulty: 6kyu
// https://www.codewars.com/kata/5966847f4025872c7d00015b

const stringNumber = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
};

const numberString = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  NaN: 'n/a',
};

const averageString = (str) => numberString[Math.floor(
  str.split(' ').reduce((acc, cur) => acc + stringNumber[cur], 0)
  / str.split(' ').length
)];



console.log(averageString("zero nine five two"), "four");
console.log(averageString("four six two three"), "three");
console.log(averageString("one two three four five"), "three");
console.log(averageString("five four"), "four");
console.log(averageString("zero zero zero zero zero"), "zero");
console.log(averageString("one one eight one"), "two");
console.log(averageString(""), "n/a");
