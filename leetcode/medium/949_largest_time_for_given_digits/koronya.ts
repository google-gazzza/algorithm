// [Medium] 949. Largest Time for Given Digits
// 949_largest_time_for_given_digits

// https://leetcode.com/problems/largest-time-for-given-digits
// Runtime: 84 ms, faster than 75.00% of TypeScript online submissions for Largest Time for Given Digits.
// Memory Usage: 41.3 MB, less than 50.00% of TypeScript online submissions for Largest Time for Given Digits.

const convertToTimeString = (str: string): string => {
  const splitedArr: string[] = String(str).split('')
  return `${splitedArr[0]}${splitedArr[1]}:${splitedArr[2]}${splitedArr[3]}`
}

function largestTimeFromDigits(arr: number[]): string {
  const resultArr: string[] = []
  const backtracking = (candidateArr: number[], restArr: number[]) => {
    const candidateArrLen: number = candidateArr.length
    if (candidateArrLen === 4) {
      resultArr.push(candidateArr.reduce((acc, cur) => acc + cur, ''))
    } else {
      if (candidateArr[0] > 2) {
        return
      }
      if (candidateArr[0] === 2 && candidateArr[1] > 3) {
        return
      }
      if (candidateArr[2] > 5) {
        return
      }
      const restArrLen: number = restArr.length
      for (let i: number = 0; i < restArrLen; i += 1) {
        const copiedArr: number[] = [...restArr]
        const item: number[] = copiedArr.splice(i, 1)
        backtracking([...candidateArr, ...item], copiedArr)
      }
    }
  }
  for (let i: number = 0; i < 4; i += 1) {
    const copiedArr: number[] = [...arr]
    const item: number[] = copiedArr.splice(i, 1)
    backtracking([...item], copiedArr)
  }
  const uniqueArr: string[] = [...new Set(resultArr)]
  if (uniqueArr.length === 0) {
    return ''
  }
  uniqueArr.sort((a, b) => Number(b) - Number(a))

  return convertToTimeString(uniqueArr[0])
}

largestTimeFromDigits([1, 2, 3, 4]) //?
largestTimeFromDigits([5, 5, 5, 5]) //?
largestTimeFromDigits([0, 0, 0, 0]) //?
largestTimeFromDigits([0, 0, 1, 0]) //?
largestTimeFromDigits([1, 6, 3, 4]) //?
