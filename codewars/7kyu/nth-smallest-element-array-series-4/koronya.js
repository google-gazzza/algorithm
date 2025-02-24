// [JS][7kyu] Nth Smallest Element (Array Series #4)
// nth-smallest-element-array-series-4
// https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript

const nthSmallest = (arr, pos) => {
  arr.sort((a, b) => a - b)
  return arr[pos - 1]
}

nthSmallest([3, 1, 2], 2)
// nthSmallest([15, 20, 7, 10, 4, 3], 3)
// nthSmallest([-5, -1, -6, -18], 4)
// nthSmallest([-102, -16, -1, -2, -367, -9], 5)
// nthSmallest([2, 169, 13, -5, 0, -1], 4)
// nthSmallest([2, 1, 3, 3, 1, 2], 3)
