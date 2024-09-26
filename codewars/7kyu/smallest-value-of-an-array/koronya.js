// [JS][7kyu] Smallest value of an array
// smallest-value-of-an-array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

const min = (arr, toReturn) => {
  const adjustArr = arr.map((value, index) => ({ value, index }))
  adjustArr.sort((a, b) => a.value - b.value)
  return toReturn === 'value' ? adjustArr[0].value : adjustArr[0].index
}

min([1, 2, 3, 4, 5], 'value') === 1
min([1, 2, 3, 4, 5], 'index') === 0

min([2, 1, 3, 4, 5], 'index')
