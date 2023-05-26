// [Easy] 1176. Diet Plan Performance
// 1176_diet_plan_performance

// https://leetcode.com/problems/diet-plan-performance
// Runtime: 512 ms, faster than 33.33% of TypeScript online submissions for Diet Plan Performance.
// Memory Usage: 44 MB, less than 100.00% of TypeScript online submissions for Diet Plan Performance.

function dietPlanPerformance(calories: number[], k: number, lower: number, upper: number): number {
  const caloriesLen: number = calories.length
  let point: number = 0
  const arr: number[] = calories.slice(0, k)
  let sum: number = arr.reduce((acc, cur) => acc + cur, 0)
  const calc = () => {
    if (sum > upper) {
      point += 1
    } else if (sum < lower) {
      point -= 1
    }
  }
  calc()

  for (let i: number = k; i < caloriesLen; i += 1) {
    sum -= arr.shift()!
    const num = calories[i]
    sum += num
    arr.push(num)
    calc()
  }

  return point
}
