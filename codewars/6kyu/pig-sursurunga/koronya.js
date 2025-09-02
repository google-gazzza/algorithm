// [JS][6kyu] Pig Sursurunga
// pig-sursurunga
// https://www.codewars.com/kata/5536aba6e4609cc6a600003d/train/javascript

const REGEX_NUMBER = /^[-]*[\d]+$/
const isNumber = (str) => REGEX_NUMBER.test(str)

const execWord = (txt) => {
  const [strCount, ...rest] = txt.split(' ')
  const count = Number(strCount)
  if (count < 2) {
    return txt
  }
  const word = rest.join(' ')
  const singleWord = word.substring(0, word.length - 1)

  if (count === 2) {
    return `2 bu${singleWord}`
  }
  if (count < 10) {
    return `${count} ${singleWord}zo`
  }
  return `${count} ga${singleWord}ga`
}

const execLine = (line) => {
  const resultArr = []
  const arr = line.split(' ')
  const arrLen = arr.length
  let prev = arr[0]
  for (let i = 1; i < arrLen; i += 1 || 0) {
    const curr = arr[i]
    if (isNumber(prev)) {
      resultArr.push(execWord(`${prev} ${curr}`))
      prev = ''
    } else if (prev === '') {
      prev = curr
    } else {
      resultArr.push(prev)
      prev = curr
    }
  }
  if (prev !== '') {
    resultArr.push(prev)
  }

  return resultArr.join(' ')
}

const sursurungal = (txt) => {
  if (txt.includes('\n')) {
    return txt
      .split('\n')
      .map((line) => execLine(line))
      .join('\n')
  }

  return execLine(txt)
}

sursurungal('0 tomato') === '0 tomato'
sursurungal('1 tomato') === '1 tomato'

sursurungal('2 tomatoes') === '2 butomatoe'

sursurungal('3 tomatoes') === '3 tomatoezo'
sursurungal('5 tomatoes') === '5 tomatoezo'
sursurungal('7 tomatoes') === '7 tomatoezo'
sursurungal('3 tomatoes') === '3 tomatoezo'

sursurungal('10 tomatoes') === '10 gatomatoega'

sursurungal('2 tomatoes')
sursurungal('6 birds with 2 wings each = 12 legs')
sursurungal('\n1 tail of snake\n4 wings of bat\n375 legs of rat\n2 ears of owl')
