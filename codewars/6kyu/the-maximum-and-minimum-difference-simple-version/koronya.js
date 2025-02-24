// [JS][6kyu] The maximum and minimum difference -- Simple version
// the-maximum-and-minimum-difference-simple-version
// https://www.codewars.com/kata/583c5469977933319f000403/train/javascript

const maxAndMin = (arr1, arr2) => {
  let min = Math.abs(arr1[0] - arr2[0])
  let max = min
  arr1.forEach((item1) => {
    arr2.forEach((item2) => {
      const diff = Math.abs(item1 - item2)
      min = Math.min(min, diff)
      max = Math.max(max, diff)
    })
  })

  return [max, min]
}

maxAndMin([3, 10, 5], [20, 7, 15, 8])
maxAndMin([3], [20])
maxAndMin([3, 10, 5], [3, 10, 5])
maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
