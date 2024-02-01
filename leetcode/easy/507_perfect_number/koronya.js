// https://leetcode.com/problems/perfect-number
// Runtime: 56 ms, faster than 94.85% of JavaScript online submissions for Perfect Number.
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Perfect Number.
const checkPerfectNumber = num => {
  if (num === 1) {
    return false
  }
  const sqrtNum = Math.sqrt(num)
  const candidateArr = []
  let beforeDivider = 2
  let number = num
  while (beforeDivider <= sqrtNum && beforeDivider <= number) {
    if (number % beforeDivider === 0) {
      candidateArr.push(beforeDivider)
      number /= beforeDivider
    } else {
      if (beforeDivider === 2) {
        beforeDivider += 1
      } else {
        beforeDivider += 2
      }
    }
  }
  candidateArr.push(number)

  const dividerSet = new Set()
  const candidateArrLen = candidateArr.length
  const setMultiplyToDividerSet = (start = 0, multiply = 1) => {
    if (start === candidateArrLen) {
      dividerSet.add(multiply)
    } else {
      setMultiplyToDividerSet(start + 1, multiply)
      setMultiplyToDividerSet(start + 1, multiply * candidateArr[start])
    }
  }
  setMultiplyToDividerSet()
  dividerSet.delete(num)
  return num === [...dividerSet].reduce((acc, cur) => acc + cur)
}

// Runtime: 460 ms, faster than 77.94% of JavaScript online submissions for Perfect Number.
// Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Perfect Number.
const checkPerfectNumber2 = num => {
  if (num === 1) {
    return false
  }
  const candidateArr = []
  let beforeDivider = 2
  let number = num
  while (beforeDivider <= number) {
    if (number % beforeDivider === 0) {
      candidateArr.push(beforeDivider)
      number /= beforeDivider
    } else {
      if (beforeDivider === 2) {
        beforeDivider += 1
      } else {
        beforeDivider += 2
      }
    }
  }

  const dividerSet = new Set()
  const candidateArrLen = candidateArr.length
  const setMultiplyToDividerSet = (start = 0, multiply = 1) => {
    if (start === candidateArrLen) {
      dividerSet.add(multiply)
    } else {
      setMultiplyToDividerSet(start + 1, multiply)
      setMultiplyToDividerSet(start + 1, multiply * candidateArr[start])
    }
  }
  setMultiplyToDividerSet()
  dividerSet.delete(num)
  return num === [...dividerSet].reduce((acc, cur) => acc + cur)
}

// Runtime: 860 ms, faster than 77.57% of JavaScript online submissions for Perfect Number.
// Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Perfect Number.
const checkPerfectNumber3 = num => {
  if (num === 1) {
    return false
  }
  const candidateArr = []
  let beforeDivider = 2
  let number = num
  while (beforeDivider <= number) {
    if (number % beforeDivider === 0) {
      candidateArr.push(beforeDivider)
      number /= beforeDivider
    } else {
      beforeDivider += 1
    }
  }

  const dividerSet = new Set()
  const setMultiplyToDividerSet = (arr, start = 0, multiply = 1) => {
    const arrLen = arr.length
    if (start === arrLen) {
      dividerSet.add(multiply)
    } else {
      setMultiplyToDividerSet(arr, start + 1, multiply)
      setMultiplyToDividerSet(arr, start + 1, multiply * arr[start])
    }
  }

  setMultiplyToDividerSet(candidateArr)
  dividerSet.delete(num)
  return num === [...dividerSet].reduce((acc, cur) => acc + cur)
}
