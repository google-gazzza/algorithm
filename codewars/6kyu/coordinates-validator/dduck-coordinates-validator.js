// coordinates-validator
// Coordinates Validator
// https://www.codewars.com/kata/5269452810342858ec000951/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/coordinates-validator

const isValidCoordinates = (coordinates) => {
  if (coordinates.split(',').length !== 2
    || coordinates.match(/[a-zA-Z]/)) {
    return false;
  }
  
  const [latitude, longitude] = coordinates.split(',').map(Number);
  
  return (latitude >= -90 && latitude <= 90)
    && (longitude >= -180 && longitude <= 180);
};


// test code
var ValidCoordinates = [
  "-23, 25",
  "4, -3",
  "24.53525235, 23.45235",
  "04, -23.234235",
  "43.91343345, 143"
];

for (const i of ValidCoordinates) {
  isValidCoordinates(i);
  //?
}

var InvalidCoordinates = [
  "23.234, - 23.4234",
  "2342.43536, 34.324236",
  "N23.43345, E32.6457",
  "99.234, 12.324",
  "6.325624, 43.34345.345",
  "0, 1,2",
  "0.342q0832, 1.2324",
  "23.245, 1e1"
];

for (const i of InvalidCoordinates) {
  isValidCoordinates(i);
  //?
}
