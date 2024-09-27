const readline = require('readline')
let answer = []
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let input = null
rl.on('line', (line) => {
  input = line
  rl.close()
})

rl.on('close', () => {
  solution(input, 0)
  console.log(answer[input])
  process.exit()
})
function solution(input) {
  let N = Number(input)
  answer = Array.from(Array(N + 1), () => 0)
  answer[2] = 1
  answer[3] = 1

  for (let i = 4; i <= N; i++) {
    answer[i] = answer[i - 1] + 1
    if (i % 3 === 0) {
      answer[i] = Math.min(answer[i], answer[i / 3] + 1)
    }
    if (i % 2 === 0) {
      answer[i] = Math.min(answer[i], answer[i / 2] + 1)
    }
  }
}
