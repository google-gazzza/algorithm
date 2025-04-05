// [JS][6kyu] Linux history and `!` command. Series#3 The `!-n` command
// linux-history-and-command-series-3-the-n-command
// https://www.codewars.com/kata/5815fd7441e062463d0000f8/train/javascript

function bangMinusN(n, history) {
  const filteredLine = history
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .map((line) => {
      const match = line.match(/^(\d+)\s+(.*)$/)
      if (match) {
        return [match[1], match[2]]
      }
      return null
    })
    .filter((item) => item !== null)
  const filteredLineLen = filteredLine.length
  const findItem = filteredLine.find((line) => line[0] === (filteredLineLen - n + 1).toString())

  return findItem ? findItem[1] : `!-${n}: event not found`
}

function bangMinusN3(n, history) {
  console.log('n: ', n)
  console.log('history: ', history)
  const findItem = history
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .map((line) => line.split('  '))
  // .find((line) => {
  //   console.log('line: ', line)
  //   console.log('line[0]: ', line[0])
  //   return line[0] === (n + 1).toString()
  // })

  console.log('findItem: ', findItem)

  return findItem ? findItem[1] : `!-${n}: event not found`
}

const history = `
  1  cd /pub
  2  more beer
  3  lost
  4  ls 
  5  touch me
  6  chmod 000 me
  7  history
  8  more me
  `

// bangMinusN(3, history)
// bangMinusN(4, history)

const history2 = `
  1 more me
  2 cd /pub
  3 cd /pub
  4 cd /pub
  5 cd /pub
  `

// bangMinusN(1, history2)
