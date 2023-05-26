// [Medium] 526. Beautiful Arrangement
// 526_beautiful_arrangement

// https://leetcode.com/problems/beautiful-arrangement
// Runtime: 1272 ms, faster than 6.78% of TypeScript online submissions for Beautiful Arrangement.
// Memory Usage: 45.3 MB, less than 13.56% of TypeScript online submissions for Beautiful Arrangement.

/**
 * @param {number} n
 * @return {number}
 */

interface INextItems {
  copiedArr: number[]
  val: number
}

const getNextItems = (arr: number[], index: number): INextItems => {
  const copiedArr: number[] = [...arr]
  const val: number = copiedArr.splice(index, 1)[0]
  return { copiedArr, val }
}

const isValid = (arr: number[]): boolean => {
  const arrLen: number = arr.length
  for (let i: number = 0; i < arrLen; i += 1) {
    const val: number = arr[i]
    const index: number = i + 1
    if (val % index !== 0 && index % val !== 0) {
      return false
    }
  }
  return true
}

function countArrangement(n: number): number {
  let result: number = 0
  const arr: number[] = Array.from({ length: n }).map((_, i) => i + 1)
  const backtrack = (restArr: number[], selectedArr: number[]) => {
    if (isValid(selectedArr) === false) {
      return
    }
    if (selectedArr.length === n) {
      result += 1
    }
    const restArrLen: number = restArr.length
    for (let i: number = 0; i < restArrLen; i += 1) {
      const { copiedArr, val } = getNextItems(restArr, i)
      backtrack(copiedArr, [...selectedArr, val])
    }
  }
  for (let i: number = 0; i < n; i += 1) {
    const { copiedArr, val } = getNextItems(arr, i)
    backtrack(copiedArr, [val])
  }

  return result
}

countArrangement(2) //?
countArrangement(1) //?
countArrangement(3) //?
countArrangement(5) //?
