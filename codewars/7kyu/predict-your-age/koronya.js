// [JS][7kyu] Predict your age!
// predict-your-age
// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

const predictAge = (...ages) => Math.floor(Math.sqrt(ages.map((age) => age * age).reduce((acc, cur) => acc + cur, 0)) / 2)

predictAge(65, 60, 75, 55, 60, 63, 64, 45)
