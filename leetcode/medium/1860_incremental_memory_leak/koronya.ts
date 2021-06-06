// [Medium] 1860. Incremental Memory Leak
// 1860_incremental_memory_leak

// https://leetcode.com/problems/incremental-memory-leak
// Runtime: 100 ms, faster than 66.67% of TypeScript online submissions for Incremental Memory Leak.
// Memory Usage: 39.6 MB, less than 33.33% of TypeScript online submissions for Incremental Memory Leak.

/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
function memLeak(memory1: number, memory2: number): number[] {
  let now: number = 1
  const loop = (): boolean => {
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
  let isContinue: boolean = true
  while (isContinue === true) {
    isContinue = loop()
  }

  return [now, memory1, memory2]
}

memLeak(2, 2) //?
memLeak(8, 11) //?
