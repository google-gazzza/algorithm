// [Easy] 1854. Maximum Population Year
// 1854_maximum_population_year

// https://leetcode.com/problems/maximum-population-year
// Runtime: 80 ms, faster than 86.25% of JavaScript online submissions for Maximum Population Year.
// Memory Usage: 40.9 MB, less than 17.50% of JavaScript online submissions for Maximum Population Year.

/**
 * @param {number[][]} logs
 * @return {number}
 */
const maximumPopulation = function (logs) {
  const yearMap = new Map()
  logs.forEach((log) => {
    for (let year = log[0]; year < log[1]; year += 1 || 0) {
      yearMap.set(year, (yearMap.get(year) || 0) + 1)
    }
  })
  const sortedYearArr = [...yearMap].sort((a, b) => b[0] - a[0])
  const sortedYearArrLen = sortedYearArr.length
  let max = 0
  let maxYear = 0
  for (let i = 0; i < sortedYearArrLen; i += 1 || 0) {
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
