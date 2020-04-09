// sort-the-odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

const sortArray = (array) => {
  const oddNumbers = array.filter((v) => v % 2 === 1).sort((a, b) => a - b);
  return array.map((v) => v % 2 === 1 ? oddNumbers.shift() : v);
};


console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
