// [Medium] 1362. Closest Divisors
// 1362_closest_divisors

// https://leetcode.com/problems/closest-divisors
// Runtime: 88 ms, faster than 80.00% of JavaScript online submissions for Closest Divisors.
// Memory Usage: 44.5 MB, less than 5.00% of JavaScript online submissions for Closest Divisors.

// 소인수분해
const getIFPArr = (num) => {
  const IFPArr = []
  let target = num
  let divider = 2
  let sqrtNum = Math.sqrt(num)
  let primeFlag = false
  while (target >= divider) {
    if (divider > sqrtNum) {
      primeFlag = true
      break
    }
    if (target % divider === 0) {
      IFPArr.push(divider)
      target /= divider
      sqrtNum = Math.sqrt(target)
    } else {
      divider += 1
    }
  }

  return primeFlag === false ? IFPArr : [...IFPArr, target]
}

// getIFPArr(79744247) //?
// getIFPArr(797442478) //?
// getIFPArr(797442479) //?

// getIFPArr(944361387) //?
// getIFPArr(944361388) //?

const getMultiplyOfArr = (arr) => arr.reduce((acc, cur) => acc * cur, 1)

const getMin = (arr, num) => {
  const arrLen = arr.length
  let min = Number.MAX_SAFE_INTEGER
  let candidate = []

  const dfs = (selectedArr, start) => {
    const numA = getMultiplyOfArr(selectedArr)
    const numB = num / numA
    const diff = Math.abs(numA - numB)
    if (min > diff) {
      min = diff
      candidate = [numA, numB]
    }
    for (let i = start + 1; i < arrLen; i += 1 || 0) {
      dfs([...selectedArr, arr[i]], i)
    }
  }
  for (let i = 0; i < arrLen; i += 1 || 0) {
    dfs([arr[i]], i)
  }

  return { min, candidate }
}

/**
 * @param {number} num
 * @return {number[]}
 */
const closestDivisors = function (num) {
  const { min: minA, candidate: candidateA } = getMin(getIFPArr(num + 1), num + 1)
  const { min: minB, candidate: candidateB } = getMin(getIFPArr(num + 2), num + 2)
  return minA < minB ? candidateA : candidateB
}

// closestDivisors(1) //?
// closestDivisors(8) //?
// closestDivisors(123) //?
// closestDivisors(999) //?

// closestDivisors(79744247) //?
// closestDivisors(797442477) //?
// closestDivisors(944361386) //?
