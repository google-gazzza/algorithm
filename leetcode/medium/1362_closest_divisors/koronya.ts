// [Medium] 1362. Closest Divisors
// 1362_closest_divisors

// https://leetcode.com/problems/closest-divisors
// Runtime: 124 ms, faster than 100.00% of TypeScript online submissions for Closest Divisors.
// Memory Usage: 45.3 MB, less than 100.00% of TypeScript online submissions for Closest Divisors.

// 소인수분해
const getIFPArr = (num: number): number[] => {
  const IFPArr: number[] = []
  let target: number = num
  let divider: number = 2
  let sqrtNum: number = Math.sqrt(num)
  let primeFlag: boolean = false
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

const getMultiplyOfArr = (arr: number[]): number => arr.reduce((acc, cur) => acc * cur, 1)

interface IMinInfo {
  min: number
  candidate: number[]
}

const getMin = (arr: number[], num: number): IMinInfo => {
  const arrLen: number = arr.length
  let min: number = Number.MAX_SAFE_INTEGER
  let candidate: number[] = []

  const dfs = (selectedArr: number[], start: number) => {
    const numA: number = getMultiplyOfArr(selectedArr)
    const numB: number = num / numA
    const diff: number = Math.abs(numA - numB)
    if (min > diff) {
      min = diff
      candidate = [numA, numB]
    }
    for (let i: number = start + 1; i < arrLen; i += 1) {
      dfs([...selectedArr, arr[i]], i)
    }
  }
  for (let i: number = 0; i < arrLen; i += 1) {
    dfs([arr[i]], i)
  }

  return { min, candidate }
}

/**
 * @param {number} num
 * @return {number[]}
 */
function closestDivisors(num: number): number[] {
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
