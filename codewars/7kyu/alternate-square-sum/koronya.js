// [JS][7kyu] Alternate Square Sum
// alternate-square-sum
// https://www.codewars.com/kata/559d7951ce5e0da654000073/train/javascript

const alternateSqSum = (arr) => arr.reduce((acc, cur, index) => acc + (index % 2 === 0 ? cur : cur ** 2), 0)

alternateSqSum([]) === 0
alternateSqSum([1, 2, 3, 4, 5]) === 29
alternateSqSum([-1, 0, -3, 0, -5, 3]) === 0
alternateSqSum([-1, 2, -3, 4, -5]) === 11
