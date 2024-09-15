// [JS][6kyu] Numbers of Letters of Numbers
// numbers-of-letters-of-numbers
// https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript

const NUMBER_STRING_LIST = [
  ['0', 'zero'],
  ['1', 'one'],
  ['2', 'two'],
  ['3', 'three'],
  ['4', 'four'],
  ['5', 'five'],
  ['6', 'six'],
  ['7', 'seven'],
  ['8', 'eight'],
  ['9', 'nine'],
]

const getValue = (number) =>
  String(number)
    .split('')
    .map((numberString) => NUMBER_STRING_LIST[numberString][1])
    .join('')

const numbersOfLetters = (integer) => {
  let prev = getValue(integer)
  const result = [prev]
  while (true) {
    let next = getValue(prev.length)
    if (prev === next) {
      break
    }
    result.push(next)
    prev = next
  }

  return result
}

numbersOfLetters(1)
numbersOfLetters(12)
numbersOfLetters(37)
numbersOfLetters(311)
numbersOfLetters(999)
