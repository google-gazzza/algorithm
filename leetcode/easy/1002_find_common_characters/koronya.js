// https://leetcode.com/problems/find-common-characters
// Runtime: 92 ms, faster than 46.84% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 42.3 MB, less than 14.29% of JavaScript online submissions for Find Common Characters.
const commonChars = A => {
  const ALen = A.length
  const duplicateMap = new Map()
  let index = 0
  const adjustDuplicateMap = newMap => {
    [...duplicateMap].map(item => {
      const key = item[0]
      const matchItem = [...newMap].find(bItem => {
        return bItem[0] === key
      })
      if (matchItem === undefined) {
        duplicateMap.delete(key)
      } else {
        duplicateMap.set(key, Math.min(duplicateMap.get(key), matchItem[1]))
      }
    })
  }

  [...A[index]].map(char => {
    duplicateMap.set(char, (duplicateMap.get(char) | 0) + 1)
  })
  index += 1

  do {
    const tempMap = new Map();
    [...A[index]].map(char => {
      tempMap.set(char, (tempMap.get(char) | 0) + 1)
    })
    adjustDuplicateMap(tempMap)
    index += 1
  } while (index < ALen)

  const returnArr = [];
  [...duplicateMap].map(item => {
    const [key, value] = item
    for (let i = 0; i < value; i = i + 1 | 0) {
      returnArr.push(key)
    }
  })

  return returnArr
}
