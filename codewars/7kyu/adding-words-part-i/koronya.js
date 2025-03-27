// [JS][7kyu] Adding words - Part I
// adding-words-part-i
// https://www.codewars.com/kata/592eaf848c91f248ca000012/train/javascript

const WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
}

const convertNumberToWord = (number) => Object.keys(WORDS).find((key) => WORDS[key] === number)
const convertWordToNumber = (word) => WORDS[word]

class Arith {
  constructor(value) {
    this.value = value
  }

  add(value) {
    const newNumber = convertWordToNumber(this.value) + convertWordToNumber(value)
    return convertNumberToWord(newNumber)
  }
}

const i = new Arith('three')
// i.add('seven') === 'ten'
// i.add('eight') === 'eleven'
// i.add('zero') === 'three'
i.add('nine')
