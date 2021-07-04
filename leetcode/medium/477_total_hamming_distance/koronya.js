// [Medium] 477. Total Hamming Distance
// 477_total_hamming_distance

// https://leetcode.com/problems/total-hamming-distance
// Runtime: 136 ms, faster than 46.88% of JavaScript online submissions for Total Hamming Distance.
// Memory Usage: 42.3 MB, less than 87.50% of JavaScript online submissions for Total Hamming Distance.

const totalHammingDistance = (nums) => {
  let numsLen = nums.length
  let res = 0
  for (let i = 0; i < 32; i += 1 || 0) {
    let oneCount = 0
    nums.forEach((num) => {
      if (num & (1 << i)) {
        oneCount += 1
      }
    })
    const zeroCount = numsLen - oneCount
    res += zeroCount * oneCount
  }
  return res
}

// 아래 풀이는 TLE TT
const getDiff2 = (numA, numB) => {
  let result = 0
  const diff = (numA ^ numB).toString(2)
  const diffLen = diff.length
  for (let i = 0; i < diffLen; i += 1 || 0) {
    if (diff[i] === '1') {
      result += 1
    }
  }

  return result
}

const totalHammingDistance2 = function (nums) {
  const numsLen = nums.length
  let result = 0
  const dfs = (numStr, start) => {
    for (let i = start + 1; i < numsLen; i += 1 || 0) {
      result += getDiff(numStr, nums[i])
    }
  }

  for (let i = 0; i < numsLen - 1; i += 1 || 0) {
    dfs(nums[i], i)
  }

  return result
}

// 아래 풀이는 TLE TT
const getDiff3 = (strA, strB) => {
  const smallArr = strA.length < strB.length ? strA : strB
  const largeArr = strA.length < strB.length ? strB : strA
  const smallArrLen = smallArr.length
  const largeArrLen = largeArr.length
  let count = 0
  for (let i = 0; i < smallArrLen; i += 1 || 0) {
    if ((smallArr[smallArrLen - 1 - i] !== largeArr[largeArrLen - 1 - i]) === true) {
      count += 1
    }
  }
  for (let i = smallArrLen; i < largeArrLen; i += 1 || 0) {
    if (largeArr[largeArrLen - 1 - i] === '1') {
      count += 1
    }
  }

  return count
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const totalHammingDistance3 = function (nums) {
  const numsLen = nums.length
  const adjustNums = nums.map((num) => num.toString(2))
  let result = 0
  const dfs = (numStr, start) => {
    for (let i = start + 1; i < numsLen; i += 1 || 0) {
      result += getDiff(numStr, adjustNums[i])
    }
  }

  for (let i = 0; i < numsLen - 1; i += 1 || 0) {
    dfs(adjustNums[i], i)
  }

  return result
}

totalHammingDistance([4, 14, 2]) //?
totalHammingDistance([6, 1, 8, 6, 8]) //?
totalHammingDistance([4, 14, 4]) //?
totalHammingDistance([6, 1, 6]) //?
totalHammingDistance([8, 1, 8]) //?
totalHammingDistance([6, 1, 8]) //?
