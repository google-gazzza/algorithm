// [Easy] 1103. Distribute Candies to People
// 1103_distribute_candies_to_people

// https://leetcode.com/problems/distribute-candies-to-people
// Runtime: 72 ms, faster than 93.98% of JavaScript online submissions for Distribute Candies to People.
// Memory Usage: 38.8 MB, less than 16.87% of JavaScript online submissions for Distribute Candies to People.
const distributeCandies = function (candies, num_people) {
  const resultArr = Array(num_people).fill(0)
  let rest = candies
  let lastMultiply = 0
  while (true) {
    for (let i = 0; i < num_people; i += 1 || 0) {
      if (rest === 0) {
        return resultArr
      }
      const candidate = lastMultiply * num_people + i + 1
      const plus = rest < candidate ? rest : candidate
      resultArr[i] += plus
      rest -= plus
    }
    lastMultiply += 1
  }
}
