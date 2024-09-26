// [Hard] 135. Candy
// 135_candy

// https://leetcode.com/problems/candy
// Runtime: 1936 ms, faster than 11.76% of TypeScript online submissions for Candy.
// Memory Usage: 44 MB, less than 35.29% of TypeScript online submissions for Candy.

const getPreviousIndex = (index: number): number => Math.max(-1, index - 2)

function candy(ratings: number[]): number {
  const ratingsLen: number = ratings.length
  const resultArr: number[] = Array.from({ length: ratingsLen }).map((_) => 1)
  for (let i: number = 0; i < ratingsLen - 1; i += 1) {
    if (ratings[i] < ratings[i + 1] && resultArr[i] >= resultArr[i + 1]) {
      resultArr[i + 1] = resultArr[i] + 1
    } else if (ratings[i] > ratings[i + 1] && resultArr[i] <= resultArr[i + 1]) {
      resultArr[i] = resultArr[i + 1] + 1
      i = getPreviousIndex(i)
    }
  }

  return resultArr.reduce((acc, cur) => acc + cur, 0)
}
