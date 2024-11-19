// [JS][7kyu] Odd Ones Out!
// odd-ones-out
// https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/javascript

const oddOnesOut = (nums) => {
  const numMap = new Map()
  nums.forEach((num) => numMap.set(num, (numMap.get(num) || 0) + 1))
  const arr = [...numMap].filter(([_, count]) => count % 2 === 0).map(([num, _]) => num)
  const validSet = new Set(arr)
  return nums.filter((num) => validSet.has(num))
}
  
oddOnesOut([1, 2, 3, 1, 3, 3])
oddOnesOut([75, 68, 75, 47, 68])
oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67])
oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100])
oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50])
