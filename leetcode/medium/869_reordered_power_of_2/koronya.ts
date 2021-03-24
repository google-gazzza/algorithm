// [Medium] 869. Reordered Power of 2
// 869_reordered_power_of_2

// https://leetcode.com/problems/reordered-power-of-2
// Runtime: 2188 ms, faster than 66.67% of TypeScript online submissions for Reordered Power of 2.
// Memory Usage: 45 MB, less than 100.00% of TypeScript online submissions for Reordered Power of 2.

const powerOf2Arr: number[] = Array.from({ length: 30 }).map((_, index) => 2 ** index)

const isPowerOf2 = (str: string): boolean => powerOf2Arr.includes(Number(str))

function reorderedPowerOf2(N: number): boolean {
  const NArr: string[] = String(N).split('')
  const NArrLen: number = NArr.length
  let trueFlag: boolean = false

  const dfs = (arr: string[], restArr: string[]) => {
    if (trueFlag === true) {
      return true
    }
    if (arr.length === NArrLen) {
      if (isPowerOf2(arr.reduce((acc, cur) => acc + cur, '')) === true) {
        trueFlag = true
      }
    } else {
      const restArrLen: number = restArr.length
      for (let i: number = 0; i < restArrLen; i += 1) {
        const duplicateArr: string[] = [...restArr]
        const item: string = duplicateArr.splice(i, 1)[0]
        dfs([...arr, item], duplicateArr)
      }
    }
  }

  for (let i: number = 0; i < NArrLen; i += 1) {
    const duplicateArr: string[] = [...NArr]
    const item: string = duplicateArr.splice(i, 1)[0]
    if (item !== '0') {
      dfs([item], duplicateArr)
    }
  }

  return trueFlag
}

// reorderedPowerOf2(1) //?
// reorderedPowerOf2(10) //?
// reorderedPowerOf2(16) //?
// reorderedPowerOf2(24) //?
// reorderedPowerOf2(46) //?
// reorderedPowerOf2(1521) //?
// reorderedPowerOf2(453686452) //?

