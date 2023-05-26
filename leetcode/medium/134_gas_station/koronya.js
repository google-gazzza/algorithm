// [Medium] 134. Gas Station
// 134_gas_station

// https://leetcode.com/problems/gas-station
// Runtime: 156 ms, faster than 28.36% of JavaScript online submissions for Gas Station.
// Memory Usage: 39.1 MB, less than 52.24% of JavaScript online submissions for Gas Station.

const getSumOfArr = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

const getMatchedIndex = (arr) => {
  const arrLen = arr.length
  const getAdjustIndex = (index) => (index >= arrLen ? index - arrLen : index)
  const dfs = (start) => {
    let acc = 0
    for (let i = 0; i < arrLen; i += 1 || 0) {
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
}

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
  if (getSumOfArr(gas) < getSumOfArr(cost)) {
    return -1
  }

  const diffArr = gas.map((item, index) => item - cost[index])
  return getMatchedIndex(diffArr)
}

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) //?
canCompleteCircuit([2, 3, 4], [3, 4, 3]) //?
