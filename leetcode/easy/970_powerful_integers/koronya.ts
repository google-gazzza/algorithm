// [Easy] 970. Powerful Integers
// 970_powerful_integers

// https://leetcode.com/problems/powerful-integers
// Runtime: 88 ms, faster than 75.00% of TypeScript online submissions for Powerful Integers.
// Memory Usage: 40 MB, less than 50.00% of TypeScript online submissions for Powerful Integers.
const getMatchArr = (num: number, limit: number): number[] => {
  if (num === 1) {
    if (limit >= 1) {
      return [1]
    }
    return []
  }
  let index: number = 0
  let target: number = Math.pow(num, index)
  const resultArr: number[] = []
  while (target <= limit) {
    resultArr.push(target)
    index += 1
    target = Math.pow(num, index)
  }
  return resultArr
}

function powerfulIntegers (x: number, y: number, bound: number): number[] {
  const xArr: number[] = getMatchArr(x, bound)
  const yArr: number[] = getMatchArr(y, bound)
  const numSet = new Set<number>()
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
