// [Medium] 1850. Minimum Adjacent Swaps to Reach the Kth Smallest Number
// 1850_minimum_adjacent_swaps_to_reach_the_kth_smallest_number

// https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number
// Runtime: 924 ms, faster than 7.69% of JavaScript online submissions for Minimum Adjacent Swaps to Reach the Kth Smallest Number.
// Memory Usage: 45.9 MB, less than 46.15% of JavaScript online submissions for Minimum Adjacent Swaps to Reach the Kth Smallest Number.

const getOverNumber = (arr, target) => {
  const arrLen = arr.length
  for (let i = 1; i < arrLen; i += 1 || 0) {
    const now = arr[i]
    if (now > target) {
      return [now, i]
    }
  }
  return ['-1', -1]
}

const getNextNumber = (numStr) => {
  const numArr = Array.from(numStr)
  const numArrLen = numArr.length
  let prev = numArr[numArrLen - 1]
  const candidateArr = [prev]
  let targetIndex = -1
  for (let i = numArrLen - 2; i >= 0; i -= 1 || 0) {
    const now = numArr[i]
    candidateArr.push(now)
    if (now < prev) {
      targetIndex = i
      break
    }
    prev = now
  }
  candidateArr.sort((a, b) => Number(a) - Number(b))
  const splittedPrevStr = numArr.slice(0, targetIndex).reduce((acc, cur) => acc + String(cur), '')
  const splittedNextArr = numArr.slice(targetIndex)
  const [secondSmallNumber, secondIndex] = getOverNumber(candidateArr, splittedNextArr[0])
  candidateArr.splice(secondIndex, 1)
  const nextString = secondSmallNumber + candidateArr.reduce((acc, cur) => acc + cur, '')

  return splittedPrevStr + nextString
}

/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
const getMinSwaps = function (num, k) {
  let changeStr = num
  for (let i = 0; i < k; i += 1 || 0) {
    changeStr = getNextNumber(changeStr)
  }
  const changeStrLen = changeStr.length
  let splitIndex = -1
  for (let i = 0; i < changeStrLen; i += 1 || 0) {
    if (num[i] !== changeStr[i]) {
      splitIndex = i
      break
    }
  }

  const fromStr = num.substring(splitIndex)
  const nextStr = changeStr.substring(splitIndex)
  const checkLen = fromStr.length
  const fromArr = Array.from(fromStr)
  const nextArr = Array.from(nextStr)
  let changeCount = 0
  for (let i = 0; i < checkLen; i += 1 || 0) {
    let count = 0
    for (let j = i; j < checkLen; j += 1 || 0) {
      if (nextArr[i] !== fromArr[j]) {
        count += 1
      } else {
        for (let k = 0; k < count; k += 1 || 0) {
          const targetIndex = i + count - k
          if (targetIndex > 0 && targetIndex < checkLen) {
            const prevIndex = targetIndex - 1
            ;[fromArr[targetIndex], fromArr[prevIndex]] = [fromArr[prevIndex], fromArr[targetIndex]]
            changeCount += 1
          }
        }
        break
      }
    }
  }

  return changeCount
}

// getMinSwaps('5489355142', 4) //?
// getMinSwaps('11112', 4) //?
// getMinSwaps('00123', 1) //?
// getMinSwaps('059', 5) //?

// 5489355 142
// 5489355 421

// 11112
// 21111

// 5489355142
// 5489355 142 -> 214

// 5489355214
// 54893552 14 -> 41

// 5489355241
// 5489355 241 -> 412

// 5489355412
// 54893554 12 -> 21

// 5489355421
// 5489 355421 -> 412355

// 5489412355
// 5489412 355 -> 535
