// [Easy] 1854. Maximum Population Year
// 1854_maximum_population_year

// https://leetcode.com/problems/maximum-population-year
// Runtime: 80 ms, faster than 85.71% of TypeScript online submissions for Maximum Population Year.
// Memory Usage: 41.5 MB, less than 14.29% of TypeScript online submissions for Maximum Population Year.

/**
 * @param {number[][]} logs
 * @return {number}
 */
function maximumPopulation(logs: number[][]): number {
  const yearMap = new Map<number, number>()
  logs.forEach((log) => {
    for (let year: number = log[0]; year < log[1]; year += 1) {
      yearMap.set(year, (yearMap.get(year) || 0) + 1)
    }
  })
  const sortedYearArr: number[][] = [...yearMap].sort((a, b) => b[0] - a[0])
  const sortedYearArrLen: number = sortedYearArr.length
  let max: number = 0
  let maxYear: number = 0
  for (let i: number = 0; i < sortedYearArrLen; i += 1) {
    const [year, population] = sortedYearArr[i]
    if (max <= population) {
      max = population
      maxYear = year
    }
  }

  return maxYear
}

maximumPopulation([
  [1993, 1999],
  [2000, 2010],
]) //?

maximumPopulation([
  [1950, 1961],
  [1960, 1971],
  [1970, 1981],
]) //?
