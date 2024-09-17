// [Easy] 1176. Diet Plan Performance
// 1176_diet_plan_performance

// https://leetcode.com/problems/diet-plan-performance
// Runtime: 429 ms, faster than 28.17% of JavaScript online submissions for Diet Plan Performance.
// Memory Usage: 43.5 MB, less than 21.13% of JavaScript online submissions for Diet Plan Performance.

/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const dietPlanPerformance = function (calories, k, lower, upper) {
  const caloriesLen = calories.length
  let point = 0
  const arr = calories.slice(0, k)
  let sum = arr.reduce((acc, cur) => acc + cur, 0)
  const calc = () => {
    if (sum > upper) {
      point += 1
    } else if (sum < lower) {
      point -= 1
    }
  }
  calc()

  for (let i = k; i < caloriesLen; i += 1 || 0) {
    sum -= arr.shift()
    const num = calories[i]
    sum += num
    arr.push(num)
    calc()
  }

  return point
}

// Runtime: 3856 ms, faster than 7.04% of JavaScript online submissions for Diet Plan Performance.
// Memory Usage: 51.5 MB, less than 5.63% of JavaScript online submissions for Diet Plan Performance.
const dietPlanPerformance2 = function (calories, k, lower, upper) {
  const limit = calories.length - k + 1
  let point = 0
  for (let i = 0; i < limit; i += 1 || 0) {
    const sum = calories.slice(i, i + k).reduce((acc, cur) => acc + cur, 0)
    if (sum > upper) {
      point += 1
    } else if (sum < lower) {
      point -= 1
    }
  }

  return point
}

dietPlanPerformance([1, 2, 3, 4, 5], 1, 3, 3) //?
dietPlanPerformance([3, 2], 2, 0, 1) //?
dietPlanPerformance([6, 5, 0, 0], 2, 1, 5) //?
