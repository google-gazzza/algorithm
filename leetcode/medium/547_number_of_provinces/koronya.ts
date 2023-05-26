// [Medium] 547. Number of Provinces
// 547_number_of_provinces

// https://leetcode.com/problems/number-of-provinces
// Runtime: 96 ms, faster than 51.22% of TypeScript online submissions for Number of Provinces.
// Memory Usage: 42.5 MB, less than 12.20% of TypeScript online submissions for Number of Provinces.

/**
 * @param {number[][]} isConnected
 * @return {number}
 */

function findCircleNum(isConnected: number[][]): number {
  const matchMap = new Map<number, number>()
  const groupMap = new Map<number, number[]>()
  const convertAToB = (from: number, to: number) => {
    const fromMap = groupMap.get(from)!
    const toMap = groupMap.get(to)!
    fromMap.forEach((item) => {
      toMap.push(item)
      matchMap.set(item, to)
    })
    groupMap.delete(from)
  }

  let newGroupNumber: number = 0
  isConnected.forEach((item, rowIndex) => {
    const connectedArr: number[] = []
    item.forEach((num, colIndex) => {
      if (num === 1) {
        connectedArr.push(colIndex)
      }
    })

    const groupArr: number[] = []
    connectedArr.forEach((item) => {
      const groupNum: number = matchMap.get(item) || -1
      if (groupNum !== -1 && groupArr.includes(groupNum) === false) {
        groupArr.push(groupNum)
      }
    })
    const groupArrLen: number = groupArr.length

    if (groupArrLen === 0) {
      newGroupNumber += 1
      groupMap.set(newGroupNumber, [])
      connectedArr.forEach((item) => {
        groupMap.get(newGroupNumber)!.push(item)
        matchMap.set(item, newGroupNumber)
      })
    } else if (groupArrLen === 1) {
      const groupNumber: number = groupArr[0]
      connectedArr.forEach((item) => {
        if (groupMap.get(groupNumber)!.includes(item) === false) {
          groupMap.get(groupNumber)!.push(item)
        }
        matchMap.set(item, groupNumber)
      })
    } else {
      const groupNumber = groupArr[0]
      for (let i: number = 1; i < groupArrLen; i += 1) {
        convertAToB(groupArr[i], groupNumber)
      }
      connectedArr.forEach((item) => {
        if (groupMap.get(groupNumber)!.includes(item) === false) {
          groupMap.get(groupNumber)!.push(item)
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

// 1 1 0 1 0 0
// 1 1 0 0 0 0
// 0 0 1 0 0 0
// 1 0 0 1 1 0
