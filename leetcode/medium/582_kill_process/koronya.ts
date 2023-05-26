// [Medium] 582. Kill Process
// 582_kill_process

// https://leetcode.com/problems/kill-process
// Runtime: 214 ms, faster than 48.72% of JavaScript online submissions for Kill Process.
// Memory Usage: 67.4 MB, less than 17.09% of JavaScript online submissions for Kill Process.

function killProcess(pid: number[], ppid: number[], kill: number): number[] {
  const pidLen = pid.length
  const childMap = new Map()
  for (let i: number = 0; i < pidLen; i += 1) {
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
