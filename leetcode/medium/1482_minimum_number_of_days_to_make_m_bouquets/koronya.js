// [Medium] 1482. Minimum Number of Days to Make m Bouquets
// 1482_minimum_number_of_days_to_make_m_bouquets

// https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets
// Runtime: 129 ms, faster than 33.33% of JavaScript online submissions for Minimum Number of Days to Make m Bouquets.
// Memory Usage: 49.7 MB, less than 87.04% of JavaScript online submissions for Minimum Number of Days to Make m Bouquets.

const getAvailableBouquets = (arr, day, k) => {
  let countBouquets = 0
  let countFlower = 0
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    if (arr[i] <= day) {
      countFlower += 1
    } else {
      countFlower = 0
    }
    if (countFlower === k) {
      countBouquets += 1
      countFlower = 0
    }
  }

  return countBouquets
}

const minDays = function (bloomDay, m, k) {
  if (bloomDay.length < m * k) {
    return -1
  }
  const max = Math.max(...bloomDay)
  const min = Math.min(...bloomDay)
  let left = min
  let right = max

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (getAvailableBouquets(bloomDay, mid, k) < m) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}

// TLE...
const valid = (arr, m, k) => {
  let countBouquets = 0
  let countFlower = 0
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    if (arr[i] !== '_') {
      countFlower += 1
      if (countFlower === k) {
        countFlower = 0
        countBouquets += 1
      }
    } else {
      countFlower = 0
    }
  }

  return countBouquets >= m
}

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minDays2 = function (bloomDay, m, k) {
  const bloomDayLen = bloomDay.length
  const sortedArr = [...bloomDay]
  sortedArr.sort((a, b) => a - b)
  let targetIndex = m * k - 1

  while (targetIndex < bloomDayLen) {
    let target = sortedArr[targetIndex]
    let dd = bloomDay.map((item) => (item <= target ? item : '_'))
    if (valid(dd, m, k) === true) {
      return target
    }
    targetIndex += 1
  }

  return -1
}

minDays([1, 10, 3, 10, 2], 3, 1) //?
minDays([1, 10, 3, 10, 2], 3, 2) //?
minDays([7, 7, 7, 7, 12, 7, 7], 2, 3) //?
minDays([1000000000, 1000000000], 1, 1) //?
minDays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4, 2) //?
