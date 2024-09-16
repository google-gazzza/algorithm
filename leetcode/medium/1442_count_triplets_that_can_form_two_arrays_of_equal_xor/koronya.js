// [Medium] 1442. Count Triplets That Can Form Two Arrays of Equal XOR
// 1442_count_triplets_that_can_form_two_arrays_of_equal_xor

// https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor
// Runtime: 3120 ms, faster than 5.26% of JavaScript online submissions for Count Triplets That Can Form Two Arrays of Equal XOR.
// Memory Usage: 45 MB, less than 10.53% of JavaScript online submissions for Count Triplets That Can Form Two Arrays of Equal XOR.

const isValid = (arr, candidates) => {
  const [i, j, k] = candidates
  let a = arr[i]
  for (let index = i + 1; index < j; index += 1 || 0) {
    a ^= arr[index]
  }

  let b = arr[j]
  for (let index = j + 1; index <= k; index += 1 || 0) {
    b ^= arr[index]
  }

  return a === b
}

/**
 * @param {number[]} arr
 * @return {number}
 */
const countTriplets = function (arr) {
  let result = 0
  const arrLen = arr.length
  const dfs = (candidates) => {
    const candidatesLen = candidates.length
    if (candidatesLen === 1) {
      const first = candidates[0]
      for (let i = first + 1; i < arrLen; i += 1 || 0) {
        dfs([...candidates, i])
      }
    } else if (candidatesLen === 2) {
      const second = candidates[1]
      for (let i = second; i < arrLen; i += 1 || 0) {
        dfs([...candidates, i])
      }
    } else if (candidatesLen === 3) {
      if (isValid(arr, candidates) === true) {
        result += 1
      }
    }
  }

  for (let i = 0; i < arrLen; i += 1 || 0) {
    dfs([i])
  }

  return result
}

countTriplets([2, 3, 1, 6, 7]) //?
countTriplets([1, 1, 1, 1, 1]) //?
countTriplets([2, 3]) //?
countTriplets([1, 3, 5, 7, 9]) //?
countTriplets([7, 11, 12, 9, 5, 2, 7, 17, 22]) //?
