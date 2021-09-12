// [Medium] 491. Increasing Subsequences
// 491_increasing_subsequences

// https://leetcode.com/problems/increasing-subsequences
// Runtime: 477 ms, faster than 100.00% of TypeScript online submissions for Increasing Subsequences.
// Memory Usage: 85 MB, less than 100.00% of TypeScript online submissions for Increasing Subsequences.

const concatArr = (arr: number[]): string => arr.reduce((acc, cur) => (acc === '' ? String(cur) : `${acc},${cur}`), '')

const validArr = (arr: number[]): boolean => {
  const arrLen: number = arr.length
  let prev: number = arr[0]
  for (let i: number = 1; i < arrLen; i += 1) {
    const num: number = arr[i]
    if (prev > num) {
      return false
    }
    prev = num
  }
  return true
}

function findSubsequences(nums: number[]): number[][] {
  const numsLen: number = nums.length
  const resultSet = new Set<string>()
  const dfs = (arr: number[], start: number) => {
    if (validArr(arr) === false) {
      return
    }
    if (arr.length > 1) {
      const key: string = concatArr(arr)
      if (resultSet.has(key) === false) {
        resultSet.add(key)
      }
    }
    for (let i: number = start; i < numsLen; i += 1) {
      dfs([...arr, nums[i]], i + 1)
    }
  }

  for (let i: number = 0; i < numsLen; i += 1) {
    dfs([nums[i]], i + 1)
  }

  return [...resultSet].map((item) =>
    item.split(',').reduce((acc: number[], cur: string): number[] => {
      acc.push(Number(cur))
      return acc
    }, []),
  )
}

findSubsequences([4, 6, 7, 7]) //?
findSubsequences([4, 4, 3, 2, 1]) //?
