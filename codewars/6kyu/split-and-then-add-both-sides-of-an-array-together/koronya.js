// [JS][6kyu] Split and then add both sides of an array together.
// split-and-then-add-both-sides-of-an-array-together
// https://www.codewars.com/kata/5946a0a64a2c5b596500019a/train/javascript

const splitAndAdd = (arr, n) => {
  let count = 0
  let result = arr
  while (count < n && result.length > 1) {
    const half = Math.floor(result.length / 2)
    const left = result.slice(0, half)
    const right = result.slice(half)
    if (left.length < right.length) {
      left.unshift(0)
    }
    result = left.map((item, index) => item + right[index])
    count += 1
  }
  return result
}

splitAndAdd([1, 2, 3, 4, 5], 2)
splitAndAdd([1, 2, 3, 4, 5], 3)
splitAndAdd([15], 3)
splitAndAdd([32, 45, 43, 23, 54, 23, 54, 34], 2)
splitAndAdd([32, 45, 43, 23, 54, 23, 54, 34], 0)
splitAndAdd([3, 234, 25, 345, 45, 34, 234, 235, 345], 3)
splitAndAdd([3, 234, 25, 345, 45, 34, 234, 235, 345, 34, 534, 45, 645, 645, 645, 4656, 45, 3], 4)
splitAndAdd([23, 345, 345, 345, 34536, 567, 568, 6, 34536, 54, 7546, 456], 20)
