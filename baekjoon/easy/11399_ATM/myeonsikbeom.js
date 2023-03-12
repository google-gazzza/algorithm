//콘솔 입력 받는 변수
const input = []

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim())
  })
  .on('close', function () {
    input.splice(0, 1)
    const param = input[0].split(' ')
    param.sort((a, b) => parseInt(a) - parseInt(b))
    let sum = 0
    console.log(
      param
        .map((p) => {
          sum += parseInt(p)
          return sum
        })
        .reduce((prev, curr) => prev + curr),
    )
  })
