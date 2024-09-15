// [Easy] 970. Powerful Integers
// 970_powerful_integers

// https://leetcode.com/problems/powerful-integers
// Runtime: 76 ms, faster than 83.61% of JavaScript online submissions for Powerful Integers.
// Memory Usage: 38.5 MB, less than 16.39% of JavaScript online submissions for Powerful Integers.
const getMatchArr = (num, limit) => {
  if (num === 1) {
    if (limit >= 1) {
      return [1]
    }
    return []
  }
  let index = 0
  let target = Math.pow(num, index)
  const resultArr = []
  while (target <= limit) {
    resultArr.push(target)
    index += 1
    target = Math.pow(num, index)
  }
  return resultArr
}

const powerfulIntegers = function(x, y, bound) {
  const xArr = getMatchArr(x, bound)
  const yArr = getMatchArr(y, bound)
  const numSet = new Set()
  xArr.forEach(numX => {
    yArr.forEach(numY => {
      const sum = numX + numY
      if (sum <= bound && !numSet.has(sum)) {
        numSet.add(sum)
      } 
    })
  })

  return [...numSet]
}
