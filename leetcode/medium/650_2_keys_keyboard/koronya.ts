// [Medium] 650. 2 Keys Keyboard
// 650_2_keys_keyboard

// https://leetcode.com/problems/2-keys-keyboard
// Runtime: 80 ms, faster than 88.89% of TypeScript online submissions for 2 Keys Keyboard.
// Memory Usage: 40.9 MB, less than 33.33% of TypeScript online submissions for 2 Keys Keyboard.

const numMap = new Map<number, number>()
numMap.set(1, 0)
numMap.set(2, 2)
numMap.set(3, 3)

function minSteps(n: number): number {
  if (numMap.has(n)) {
    return numMap.get(n)!
  }
  const result: number = Math.min(...getDivideArr(n).map((item) => minSteps(item) + 1 + (n - item) / item))
  numMap.set(n, result)
  return result
}

const getDivideArr = (num: number): number[] => {
  const candidateArr: number[] = []
  let temp: number = 2
  let target: number = num
  while (temp < num) {
    if (target % temp === 0) {
      target /= temp
      candidateArr.push(temp)
    } else {
      temp += 1
    }
  }
  const candidateArrLen: number = candidateArr.length
  const candidateSet = new Set<number>()
  const dfs = (multiply: number, next: number) => {
    candidateSet.add(multiply)
    for (let i: number = next; i < candidateArrLen; i += 1) {
      dfs(multiply * candidateArr[i], i + 1)
    }
  }
  for (let i: number = 0; i < candidateArrLen; i += 1) {
    dfs(candidateArr[i], i + 1)
  }

  const sortedArr: number[] = [...candidateSet].sort((a, b) => a - b).slice(0, candidateSet.size - 1)
  sortedArr.unshift(1)
  return sortedArr
}

// getDivideArr(6)
// getDivideArr(12) //?

// minSteps(1) //?
// minSteps(2) //?
// minSteps(3) //?
minSteps(4) //?
minSteps(5) //?
minSteps(6) //?
minSteps(7) //?
minSteps(8) //?
minSteps(9) //?
minSteps(10) //?
minSteps(11) //?
minSteps(12) //?
