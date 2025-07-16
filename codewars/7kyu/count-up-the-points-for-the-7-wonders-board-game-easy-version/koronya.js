// [JS][7kyu] Count up the points for the 7 Wonders board game! Easy version
// count-up-the-points-for-the-7-wonders-board-game-easy-version
// https://www.codewars.com/kata/5adadcb36edb07df5600092e/train/javascript

const solve = (compasses, gears, tablets) => {
  let min = Math.min(compasses, gears, tablets)
  return [compasses, gears, tablets].reduce((acc, cur) => acc + cur ** 2, 0) + min * 7
}

solve(0, 0, 0) === 0
solve(1, 1, 1) === 10
solve(2, 1, 1) === 13
solve(4, 2, 2) === 38
solve(7, 2, 2) === 71
