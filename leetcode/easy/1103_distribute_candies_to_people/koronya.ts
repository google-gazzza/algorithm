// [Easy] 1103. Distribute Candies to People
// 1103_distribute_candies_to_people

// https://leetcode.com/problems/distribute-candies-to-people
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Distribute Candies to People.
// Memory Usage: 39.4 MB, less than 100.00% of TypeScript online submissions for Distribute Candies to People.
function distributeCandies(candies: number, num_people: number): number[] {
  const resultArr: number[] = Array(num_people).fill(0)
  let rest: number = candies
  let lastMultiply: number = 0
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
