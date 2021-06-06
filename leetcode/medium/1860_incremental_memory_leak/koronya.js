// [Medium] 1860. Incremental Memory Leak
// 1860_incremental_memory_leak

// https://leetcode.com/problems/incremental-memory-leak
// Runtime: 88 ms, faster than 71.43% of JavaScript online submissions for Incremental Memory Leak.
// Memory Usage: 39.1 MB, less than 8.40% of JavaScript online submissions for Incremental Memory Leak.

/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
const memLeak = function (memory1, memory2) {
  let now = 1
  const loop = () => {
    if (Math.max(memory1, memory2) < now) {
      return false
    }
    if (memory1 >= memory2) {
      memory1 -= now
    } else {
      memory2 -= now
    }
    now += 1
    return true
  }
  let isContinue = true
  while (isContinue === true) {
    isContinue = loop()
  }

  return [now, memory1, memory2]
}

memLeak(2, 2) //?
memLeak(8, 11) //?
