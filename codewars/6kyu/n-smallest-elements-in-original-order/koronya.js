// [JS][6kyu] N smallest elements in original order
// n-smallest-elements-in-original-order
// https://www.codewars.com/kata/5aec1ed7de4c7f3517000079/train/javascript

const firstNSmallest = (array, n) => {
  return array
    .map((item, index) => [item, index])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .slice(0, n)
    .sort((a, b) => a[1] - b[1])
    .map((item) => item[0])
}

// firstNSmallest([1, 2, 3, 4, 1], 3)
// firstNSmallest([1, 2, 3, 4, 1], 0)
// firstNSmallest([1, 2, 3, 4, 5], 3)
// firstNSmallest([5, 4, 3, 2, 1], 3)
