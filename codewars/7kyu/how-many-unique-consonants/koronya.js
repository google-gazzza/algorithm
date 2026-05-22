// [JS][7kyu] How Many Unique Consonants?
// how-many-unique-consonants
// https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']

const countConsonants = (str) => {
  const resultSet = new Set()
  const arr = str
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .map((char) => char.toLowerCase())
  const uniqueArr = [...new Set(arr)]
  uniqueArr.forEach((char) => {
    if (!VOWEL_LIST.includes(char) && !resultSet.has(char)) {
      resultSet.add(char)
    }
  })
  return resultSet.size
}

// countConsonants('sillystring') === 7
// countConsonants('aeiou') === 0
// countConsonants('abcdefghijklmnopqrstuvwxyz') === 21
// countConsonants('Count my unique consonants!!') === 7
// countConsonants('bcdfghjklmnpqrstvwxyz') === 21
