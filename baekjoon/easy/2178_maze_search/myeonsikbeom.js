//콘솔 입력 받는 변수
const input = []

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim())
  })
  .on('close', function () {
    const [N, M] = input[0].split(' ')

    input.splice(0, 1)

    const maze = input.map((i) => i.split('').map((n) => parseInt(n)))
    const visited = input.map((i) =>
      i
        .split('')
        .map((n) => parseInt(n))
        .map((i) => !(i === 1)),
    )
    const q = [[0, 0]]

    let answer = [[0, 0, 1]]

    const mx = [0, 0, 1, -1]
    const my = [1, -1, 0, 0]

    visited[0][0] = true

    while (q.length > 0) {
      const [x, y, result] = answer.shift()

      if (x === N - 1 && y === M - 1) {
        console.log(result)
        break
      }

      for (let i = 0; i < 4; i++) {
        let coordx = x + mx[i]
        let coordy = y + my[i]

        if (coordx >= 0 && coordy >= 0 && coordx <= N - 1 && coordy <= M - 1 && maze[coordx][coordy] === 1 && !visited[coordx][coordy]) {
          visited[coordx][coordy] = true
          answer.push([coordx, coordy, result + 1])
        }
      }
    }
  })
