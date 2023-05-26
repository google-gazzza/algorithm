// [Medium] 1529. Bulb Switcher IV
// 1529_bulb_switcher_iv

// https://leetcode.com/problems/bulb-switcher-iv
// Runtime: 120 ms, faster than 20.60% of JavaScript online submissions for Bulb Switcher IV.
// Memory Usage: 55.4 MB, less than 5.32% of JavaScript online submissions for Bulb Switcher IV.
const getEndOfZero = target => {
  const arr = target.split('')
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i = i + 1 | 0) {
    if (arr[i] !== '0') {
      return i
    }
  }
  return arrLen
}
const minFlips = target => {
  const endOfZero = getEndOfZero(target)
  if (endOfZero === target.length) {
    return 0
  }

  const adjustArr = target.split('').slice(endOfZero)
  const adjustArrLen = adjustArr.length
  const resultArr = []
  let prev = adjustArr[0]
  let accArr = [prev]

  for (let i = 1; i < adjustArrLen; i = i + 1 | 0) {
    const item = adjustArr[i]
    if (item === prev) {
      accArr.push(item)
    } else {
      resultArr.push(accArr)
      accArr = [item]
    }
    prev = item
  }
  resultArr.push(accArr)

  return resultArr.length
}
