//문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/1844#
function solution(maps) {
  let answer = 0
  const xLen = maps.length
  const yLen = maps[0].length
  const q = [[0, 0, 1]]
  const moveX = [0, 0, -1, 1]
  const moveY = [-1, 1, 0, 0]

  while (q.length !== 0) {
    const [x, y, cnt] = q.shift()
    if (x === xLen - 1 && y === yLen - 1) {
      return cnt
    }

    for (let i = 0; i < 4; i++) {
      const mx = x + moveX[i]
      const my = y + moveY[i]
      if (mx >= 0 && my >= 0 && mx < xLen && my < yLen && maps[mx][my] === 1) {
        q.push([mx, my, cnt + 1])
        maps[mx][my] = 0
      }
    }
  }
  return -1
}
