// [Medium] 1442. Count Triplets That Can Form Two Arrays of Equal XOR
// 1442_count_triplets_that_can_form_two_arrays_of_equal_xor

// https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor
// Runtime: 3128 ms, faster than 100.00% of TypeScript online submissions for Count Triplets That Can Form Two Arrays of Equal XOR.
// Memory Usage: 45.3 MB, less than 100.00% of TypeScript online submissions for Count Triplets That Can Form Two Arrays of Equal XOR.

const isValid = (arr: number[], candidates: number[]): boolean => {
  const [i, j, k] = candidates
  let a: number = arr[i]
  for (let index: number = i + 1; index < j; index += 1) {
    a ^= arr[index]
  }

  let b = arr[j]
  for (let index: number = j + 1; index <= k; index += 1) {
    b ^= arr[index]
  }

  return a === b
}

function countTriplets(arr: number[]): number {
  let result: number = 0
  const arrLen: number = arr.length
  const dfs = (candidates: number[]) => {
    const candidatesLen: number = candidates.length
    if (candidatesLen === 1) {
      const first: number = candidates[0]
      for (let i: number = first + 1; i < arrLen; i += 1) {
        dfs([...candidates, i])
      }
    } else if (candidatesLen === 2) {
      const second: number = candidates[1]
      for (let i: number = second; i < arrLen; i += 1) {
        dfs([...candidates, i])
      }
    } else if (candidatesLen === 3) {
      if (isValid(arr, candidates) === true) {
        result += 1
      }
    }
  }

  for (let i: number = 0; i < arrLen; i += 1) {
    dfs([i])
  }

  return result
}

countTriplets([2, 3, 1, 6, 7]) //?
countTriplets([1, 1, 1, 1, 1]) //?
countTriplets([2, 3]) //?
countTriplets([1, 3, 5, 7, 9]) //?
countTriplets([7, 11, 12, 9, 5, 2, 7, 17, 22]) //?
