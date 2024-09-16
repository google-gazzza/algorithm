// [JS][6kyu] Arrays Similar
// arrays-similar
// https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript

const arraysSimilar = (arr1, arr2) => {
  arr1.sort()
  arr2.sort()
  return JSON.stringify(arr1) === JSON.stringify(arr2)
}

var arr1 = [1, 2, 2, 3, 4],
  arr2 = [2, 1, 2, 4, 3],
  arr3 = [1, 2, 3, 4],
  arr4 = [1, 2, 3, '4']

arraysSimilar(arr1, arr2) // Should equal true
arraysSimilar(arr2, arr3) // Should equal false
arraysSimilar(arr3, arr4) // Should equal false
