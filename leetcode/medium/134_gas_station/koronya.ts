// [Medium] 134. Gas Station
// 134_gas_station

// https://leetcode.com/problems/gas-station
// Runtime: 144 ms, faster than 33.33% of TypeScript online submissions for Gas Station.
// Memory Usage: 40.4 MB, less than 100.00% of TypeScript online submissions for Gas Station.

const getSumOfArr = (arr: number[]): number => arr.reduce((acc, cur) => acc + cur, 0)

const getMatchedIndex = (arr: number[]): number => {
  const arrLen: number = arr.length
  const getAdjustIndex = (index: number): number => (index >= arrLen ? index - arrLen : index)
  const dfs = (start: number) => {
    let acc: number = 0
    for (let i: number = 0; i < arrLen; i += 1) {
      acc += arr[getAdjustIndex(start + i)]
      if (acc < 0) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < arrLen; i += 1 || 0) {
    if (dfs(i) === true) {
      return i
    }
  }
  return -1
}

function canCompleteCircuit(gas: number[], cost: number[]): number {
  if (getSumOfArr(gas) < getSumOfArr(cost)) {
    return -1
  }

  const diffArr: number[] = gas.map((item, index) => item - cost[index])
  return getMatchedIndex(diffArr)
}

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) //?
canCompleteCircuit([2, 3, 4], [3, 4, 3]) //?
