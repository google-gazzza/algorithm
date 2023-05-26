// [JS][7kyu] Two Oldest Ages
// two-oldest-ages
// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

// return the two oldest/oldest ages within the array of ages passed in.
const twoOldestAges = (ages) => {
  const [first, second] = ages.sort((a, b) => b - a)
  return [second, first]
}

twoOldestAges([1, 2, 10, 8])
twoOldestAges([1, 5, 87, 45, 8, 8])
twoOldestAges([1, 3, 10, 0])
