//콘솔 입력 받는 변수
const input = []

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim())
  })
  .on('close', function () {
    input.splice(0, 1)
    for (let i = 0; i < input.length; i++) {
      const vp = input[i]
      const s = []
      for (let j = 0; j < vp.length; j++) {
        if (s[s.length - 1] === '(' && vp[j] === ')') {
          s.pop()
        } else {
          s.push(vp[j])
        }
      }

      if (s.length === 0) {
        console.log('YES')
      } else {
        console.log('NO')
      }
    }
  })
