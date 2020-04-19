// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits
// Runtime: 84 ms, faster than 70.40% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
// Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
const ascSort = (a, b) => a - b
const getNumberOfBit = num => {
  const binaryString = num.toString(2)
  return [...binaryString].filter(item => item === '1').length
}
const sortByBits = arr => {
  const bitsMap = new Map()
  arr.map(number => {
    const bitsNumber = getNumberOfBit(number)
    let setArr
    if (bitsMap.has(bitsNumber)) {
      setArr = [...bitsMap.get(bitsNumber), number]
    } else {
      setArr = [number]
    }
    bitsMap.set(bitsNumber, setArr)
  })

  let sortedKeyArr = []
  for (const [key] of bitsMap) {
    sortedKeyArr.push(key)
  }
  sortedKeyArr.sort(ascSort)
  
  let resultArr = []
  sortedKeyArr.map(key => resultArr.push(...bitsMap.get(key).sort(ascSort)))

  return resultArr
}
