// [Medium] 650. 2 Keys Keyboard
// 650_2_keys_keyboard

// https://leetcode.com/problems/2-keys-keyboard
// Runtime: 80 ms, faster than 72.97% of JavaScript online submissions for 2 Keys Keyboard.
// Memory Usage: 39.1 MB, less than 36.04% of JavaScript online submissions for 2 Keys Keyboard.

const numMap = new Map()
numMap.set(1, 0)
numMap.set(2, 2)
numMap.set(3, 3)

/**
 * @param {number} n
 * @return {number}
 */
const minSteps = function (n) {
  if (numMap.has(n)) {
    return numMap.get(n)
  }
  const result = Math.min(...getDivideArr(n).map((item) => minSteps(item) + 1 + (n - item) / item))
  numMap.set(n, result)
  return result
}

const getDivideArr = (num) => {
  const candidateArr = []
  let temp = 2
  let target = num
  while (temp < num) {
    if (target % temp === 0) {
      target /= temp
      candidateArr.push(temp)
    } else {
      temp += 1
    }
  }
  const candidateArrLen = candidateArr.length
  const candidateSet = new Set()
  const dfs = (multiply, next) => {
    candidateSet.add(multiply)
    for (let i = next; i < candidateArrLen; i += 1 || 0) {
      dfs(multiply * candidateArr[i], i + 1)
    }
  }
  for (let i = 0; i < candidateArrLen; i += 1 || 0) {
    dfs(candidateArr[i], i + 1)
  }

  const sortedArr = [...candidateSet].sort((a, b) => a - b).slice(0, candidateSet.size - 1)
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
