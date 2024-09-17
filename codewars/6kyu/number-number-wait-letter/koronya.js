// [JS][6kyu] Number , number ... wait LETTER !
// number-number-wait-letter
// https://www.codewars.com/kata/5782dd86202c0e43410001f6/train/javascript

// const REGEX_ALPHA = /^[a-zA-Z]+$/
const REGEX_LOWER_ALPHA = /^[a-z]+$/
const isAlphabet = (str) => REGEX_LOWER_ALPHA.test(str)

const getInfo = (str, index) => {
  const charCode = str
    .split('')
    .filter((item) => isAlphabet(item))[0]
    .charCodeAt(0)
  const number = Number(
    str
      .split('')
      .filter((item) => !isAlphabet(item))
      .reduce((acc, item) => acc + item, ''),
  )
  return { charCode, number, index }
}

const doMath = (s) => {
  const arr = s
    .split(' ')
    .map((item, index) => getInfo(item, index))
    .sort((a, b) => {
      if (a.charCode === b.charCode) {
        return a.index - b.index
      }
      return a.charCode - b.charCode
    })
    .map((item) => item.number)

  return Math.round(
    arr.slice(1).reduce((acc, item, index) => {
      switch (index % 4) {
        case 0:
        default:
          return acc + item
        case 1:
          return acc - item
        case 2:
          return acc * item
        case 3:
          return acc / item
      }
    }, arr[0]),
  )
}

doMath('24z6 1z23 y369 89z 900b')
doMath('24z6 1x23 y369 89a 900b')
doMath('10a 90x 14b 78u 45a 7b 34y')
doMath('111a 222c 444y 777u 999a 888p')
doMath('1z 2t 3q 5x 6u 8a 7b')
