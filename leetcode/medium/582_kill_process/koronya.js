// [Medium] 582. Kill Process
// 582_kill_process

// https://leetcode.com/problems/kill-process
// Runtime: 214 ms, faster than 48.72% of JavaScript online submissions for Kill Process.
// Memory Usage: 67.4 MB, less than 17.09% of JavaScript online submissions for Kill Process.

/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
const killProcess = function (pid, ppid, kill) {
  const pidLen = pid.length
  const childMap = new Map()
  for (let i = 0; i < pidLen; i += 1 || 0) {
    const parent = ppid[i]
    const child = pid[i]
    if (childMap.has(parent) === true) {
      childMap.get(parent).push(child)
    } else {
      childMap.set(parent, [child])
    }
  }
  const result = [kill]
  let target = childMap.get(kill)
  while (target && target.length > 0) {
    result.push(...target)
    target = target.reduce((acc, cur) => (childMap.has(cur) === true ? [...acc, ...childMap.get(cur)] : acc), [])
  }

  return result
}

killProcess([1, 3, 10, 5], [3, 0, 5, 3], 5)
killProcess([1, 3, 10, 5], [3, 0, 5, 3], 3)
