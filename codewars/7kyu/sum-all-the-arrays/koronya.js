// [JS][7kyu] Sum ALL the arrays!
// sum-all-the-arrays
// https://www.codewars.com/kata/5594463eaf1701909c0000d4/train/javascript

const arraySum = (arr) =>
  arr
    .flat(Infinity)
    .filter((item) => typeof item === 'number')
    .reduce((acc, curr) => acc + curr, 0)

arraySum([1, 2]) === 3
arraySum([1, 2, 3]) === 6
arraySum([1, 2, [1, 2]]) === 6
arraySum([1, 2, 3.5]) === 6.5
arraySum([1, 2, 'pig', 3]) === 6
// prettier-ignore
arraySum([1, 2, function() { return 15; }, 3]) === 6
// prettier-ignore
arraySum([1, 2, [1, 2, 3, [5, 1, 0]]]) === 15
// prettier-ignore
arraySum([1, 2, [1, 'pig', 2, 3, function() { return 15; }, [5, 1, 0]]]) === 15
