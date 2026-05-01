// [JS][7kyu] Find the missing element between two arrays
// find-the-missing-element-between-two-arrays
// https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript

const findMissing = (arr1, arr2) => {
  arr2.forEach((num) => arr1.splice(arr1.indexOf(num), 1))
  return arr1[0]
}

findMissing([1, 2, 3], [1, 3])
findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])
findMissing([7], [])
findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4])
findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0])
