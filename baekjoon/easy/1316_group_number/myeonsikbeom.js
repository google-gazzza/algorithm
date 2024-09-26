//콘솔 입력 받는 변수
const input = []

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim())
  })
  .on('close', function () {
    input.splice(0, 1)
    let answer = 0
    for (let i = 0; i < input.length; i++) {
      const s = []
      const char = input[i]
      for (let j = 0; j < char.length; j++) {
        const findChar = s.find((c) => c === char[j])
        if (findChar && s[s.length - 1] !== char[j]) {
          break
        }
        s.push(char[j])
      }
      if (s.join('') === char) {
        answer++
      }
    }
    console.log(answer)
  })
