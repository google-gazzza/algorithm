// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to
// Runtime: 68 ms, faster than 97.51% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
// Memory Usage: 41.7 MB, less than 100.00% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
const splitArr = (arr, limit) => {
  const arrLen = arr.length
  if (arrLen < limit) {
    return arr
  }

  const resultArr = []
  let start = 0
  let end = limit

  while (start < arrLen) {
    resultArr.push(arr.slice(start, end))
    start += limit
    end += limit
  }

  return resultArr
}

const groupThePeople = groupSizes => {
  const gMap = new Map()
  groupSizes.map((item, index) => {
    if (!gMap.has(item)) {
      gMap.set(item, [index])
    } else {
      const arr = gMap.get(item)
      gMap.set(item, [...arr, index])
    }
  })

  const resultArr = []
  for (const [key, value] of gMap) {
    const partArr = splitArr(value, key)
    resultArr.push(...partArr)
  }

  return resultArr
}
