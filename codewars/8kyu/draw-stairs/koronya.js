// [JS][8kyu] Draw stairs
// draw-stairs
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript

const drawStairs = (n) => {
  let stairs = ''
  for (let i = 0; i < n; i += 1 || 0) {
    stairs += ' '.repeat(i) + 'I\n'
  }
  return stairs.trimEnd()
}

drawStairs(1)
drawStairs(3)
drawStairs(5)
