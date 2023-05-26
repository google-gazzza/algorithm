//콘솔 입력 받는 변수
let input = ''

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input = line.trim()
  })
  .on('close', function () {
    //
    let N = parseInt(input)
    const answer = new Array()
    //3*x + 5*y = N
    for (let i = 0; i <= N; i++) {
      const x3 = i * 3
      for (let j = 0; j <= N; j++) {
        const y5 = j * 5
        if (x3 + y5 === N) {
          answer.push(i + j)
        }
      }
    }
    console.log(answer.length > 0 ? Math.min(...answer) : -1)
  })
