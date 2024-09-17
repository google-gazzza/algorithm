// [Medium] 1375. Bulb Switcher III
// 1375_bulb_switcher_iii

// https://leetcode.com/problems/bulb-switcher-iii
// Runtime: 108 ms, faster than 15.71% of JavaScript online submissions for Bulb Switcher III.
// Memory Usage: 44.7 MB, less than 47.14% of JavaScript online submissions for Bulb Switcher III.

/**
 * @param {number[]} light
 * @return {number}
 */
const numTimesAllBlue = function (light) {
  const lightLen = light.length
  let result = 0
  let lightTotal = 0
  let validThreshold = 0
  for (let i = 0; i < lightLen; i += 1 || 0) {
    lightTotal += light[i]
    validThreshold += i + 1
    if (validThreshold === lightTotal) {
      result += 1
    }
  }

  return result
}

// 처음에는 아래처럼 했는데 TLE...ㅜㅜ
const numTimesAllBlue2 = function (light) {
  const arr = Array.from({ length: light.length }).map((_) => 'off')
  const arrLen = arr.length
  let allBlueCount = 0
  const isAllBlue = () => {
    const blueLen = arr.filter((item) => item === 'blue').length
    const onLen = arr.filter((item) => item === 'on').length
    if (blueLen === 0 || onLen > 0) {
      return false
    }
    for (let i = 0; i < blueLen; i += 1 || 0) {
      if (arr[i] !== 'blue') {
        return false
      }
    }
    return true
  }
  const satisfyBlue = (index) => {
    for (let i = index; i >= 0; i -= 1) {
      const item = arr[i]
      if (item === 'off') {
        return false
      }
    }
    return true
  }
  const setBlueToIndex = (index) => {
    for (let i = 0; i < index; i += 1 || 0) {
      arr[i] = 'blue'
    }
    for (let i = index; i < arrLen; i += 1 || 0) {
      if (arr[i] === 'off') {
        break
      }
      arr[i] = 'blue'
    }
  }
  light.forEach((item) => {
    const index = item - 1
    arr[index] = 'on'
    if (satisfyBlue(index) === true) {
      setBlueToIndex(index)
    }
    if (isAllBlue() === true) {
      allBlueCount += 1
    }
  })

  return allBlueCount
}

numTimesAllBlue([2, 1, 3, 5, 4]) //?
numTimesAllBlue([3, 2, 4, 1, 5]) //?
numTimesAllBlue([4, 1, 2, 3]) //?
numTimesAllBlue([2, 1, 4, 3, 6, 5]) //?
numTimesAllBlue([1, 2, 3, 4, 5, 6]) //?
