// [JS][6kyu] The Shell Game
// the-shell-game
// https://www.codewars.com/kata/546a3fea8a3502302a000cd2/train/javascript

const findTheBall = (start, swaps) => {
  let position = start
  swaps.forEach(([start, end]) => {
    if (position === start) {
      position = end
    } else if (position === end) {
      position = start
    }
  })
  return position
}

findTheBall(0, [[0, 1]]) === 1
findTheBall(1, [[0, 1]]) === 0

// prettier-ignore
findTheBall(0, [[0, 1], [2, 1], [0, 1]]) === 2
// prettier-ignore
findTheBall(0, [[0, 1], [1, 2], [2, 0], [0, 1], [1, 2], [2, 1], [2, 0], [0, 2]]) === 1
// prettier-ignore
findTheBall(0, [[0, 2], [1, 0]]) === 2
// prettier-ignore
findTheBall(1, [[0, 2], [1, 0]]) === 0
