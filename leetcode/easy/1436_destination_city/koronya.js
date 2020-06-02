// https://leetcode.com/problems/destination-city
// Runtime: 68 ms, faster than 53.31% of JavaScript online submissions for Destination City.
// Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Destination City.
const destCity = paths => {
  const endSet = new Set()
  paths.forEach(path => {
    endSet.add(path[1])
  })
  paths.forEach(path => {
    const city = path[0]
    if (endSet.has(city)) {
      endSet.delete(city)
    }
  })

  return [...endSet][0]
}
