// [Medium] 932. Beautiful Array
// 932_beautiful_array

// https://leetcode.com/problems/beautiful-array
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Beautiful Array.
// Memory Usage: 40.9 MB, less than 100.00% of TypeScript online submissions for Beautiful Array.

function beautifulArray(N: number): number[] {
  const numMap = new Map<number, number[]>()
  numMap.set(1, [1])
  const getArr = (n: number): number[] => {
    if (numMap.has(n)) {
      return numMap.get(n)!
    }
    const odds: number[] = getArr(Math.floor((n + 1) / 2)).map((item) => item * 2 - 1)
    const evens: number[] = getArr(Math.floor(n / 2)).map((item) => item * 2)
    const returnArr: number[] = [...odds, ...evens]
    numMap.set(n, returnArr)
    return returnArr
  }

  return getArr(N)
}

// beautifulArray(4) //?
// beautifulArray(5) //?
// beautifulArray(10) //?
// beautifulArray(20) //?
