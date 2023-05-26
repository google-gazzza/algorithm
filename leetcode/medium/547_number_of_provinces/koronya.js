// [Medium] 547. Number of Provinces
// 547_number_of_provinces

// https://leetcode.com/problems/number-of-provinces
// Runtime: 96 ms, faster than 43.23% of JavaScript online submissions for Number of Provinces.
// Memory Usage: 41.2 MB, less than 47.02% of JavaScript online submissions for Number of Provinces.

/**
 * @param {number[][]} isConnected
 * @return {number}
 */

const findCircleNum = function (isConnected) {
  const matchMap = new Map()
  const groupMap = new Map()
  const convertAToB = (from, to) => {
    const fromMap = groupMap.get(from)
    const toMap = groupMap.get(to)
    fromMap.forEach((item) => {
      toMap.push(item)
      matchMap.set(item, to)
    })
    groupMap.delete(from)
  }

  let newGroupNumber = 0
  isConnected.forEach((item, rowIndex) => {
    const connectedArr = []
    item.forEach((num, colIndex) => {
      if (num === 1) {
        connectedArr.push(colIndex)
      }
    })

    const groupArr = []
    connectedArr.forEach((item) => {
      const groupNum = matchMap.get(item) || -1
      if (groupNum !== -1 && groupArr.includes(groupNum) === false) {
        groupArr.push(groupNum)
      }
    })
    const groupArrLen = groupArr.length

    if (groupArrLen === 0) {
      newGroupNumber += 1
      groupMap.set(newGroupNumber, [])
      connectedArr.forEach((item) => {
        groupMap.get(newGroupNumber).push(item)
        matchMap.set(item, newGroupNumber)
      })
    } else if (groupArrLen === 1) {
      const groupNumber = groupArr[0]
      connectedArr.forEach((item) => {
        if (groupMap.get(groupNumber).includes(item) === false) {
          groupMap.get(groupNumber).push(item)
        }
        matchMap.set(item, groupNumber)
      })
    } else {
      const groupNumber = groupArr[0]
      for (let i = 1; i < groupArrLen; i += 1 || 0) {
        convertAToB(groupArr[i], groupNumber)
      }
      connectedArr.forEach((item) => {
        if (groupMap.get(groupNumber).includes(item) === false) {
          groupMap.get(groupNumber).push(item)
        }
        matchMap.set(item, groupNumber)
      })
    }
  })

  return groupMap.size
}

// findCircleNum([
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1],
// ]) //?

findCircleNum([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]) //?

