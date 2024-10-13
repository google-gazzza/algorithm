// [JS][7kyu] Unique Sum
// unique-sum
// https://www.codewars.com/kata/56b1eb19247c01493a000065/train/javascript

const uniqueSum = (lst) => {
  if (lst.length === 0) {
    return null
  }
  return [...new Set(lst)].reduce((acc, cur) => acc + cur, 0)
}

uniqueSum([1, 2, 3]) === 6
uniqueSum([1, 3, 8, 1, 8]) === 12
uniqueSum([-1, -1, 5, 2, -7]) === -1
uniqueSum([]) === null
