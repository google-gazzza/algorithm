// [Easy] 292. Nim Game
// 292_nim_game

// https://leetcode.com/problems/nim-game
// Runtime: 72 ms, faster than 84.00% of JavaScript online submissions for Nim Game.
// Memory Usage: 38.4 MB, less than 12.50% of JavaScript online submissions for Nim Game.
// simple solution!!!
const canWinNim = n => n % 4 !== 0


const nMap = new Map()
nMap.set(1, true)
nMap.set(2, true)
nMap.set(3, true)

// Javascript heap out of memory 
const canWinNim2 = n => {
  for (let i = 4; i <= n; i = i + 1 | 0) {
    let flag = false
    if (nMap.get(i - 3) === false || nMap.get(i - 2) === false || nMap.get(i - 1) === false) {
      flag = true
    }
    nMap.set(i, flag)
  }

  return nMap.get(n)
}


// Maximum call stack size exceeded
const canWinNim3 = n => {
  if (nMap.has(n)) {
    return nMap.get(n)
  }
  let flag = false
  if (canWinNim(n - 3) === false || canWinNim(n - 2) === false || canWinNim(n - 1) === false) {
    flag = true
  }
  nMap.set(n, flag)

  return flag
}
