// [JS][6kyu] Balance the arrays
// balance-the-arrays
// https://www.codewars.com/kata/58429d526312ce1d940000ee/train/javascript

const getValue = (arr) => {
  const itemMap = new Map()
  arr
    .sort((a, b) => a - b)
    .forEach((char) => {
      itemMap.set(char, (itemMap.get(char) || 0) + 1)
    })
  return [...itemMap]
    .map((item) => item[1])
    .sort((a, b) => b - a)
    .join('-')
}

const balance = (arr1, arr2) => getValue(arr1) === getValue(arr2)

const array1 = ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b']
const array2 = ['c', 'c', 'c', 'c', 'c', 'd', 'd', 'd']
balance(array1, array2) === true
