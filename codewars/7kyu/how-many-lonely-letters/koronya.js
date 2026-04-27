// [JS][7kyu] How Many Lonely Letters?
// how-many-lonely-letters
// https://www.codewars.com/kata/69cda5b85599f307742ce70a/train/javascript

const countLonelyLetters = (text) => {
  const strMap = new Map()
  const arr = text
    .split('')
    .filter((letter) => /[a-zA-Z]/.test(letter))
    .map((letter) => letter.toLowerCase().charCodeAt(0))
    .forEach((code) => {
      strMap.set(code, (strMap.get(code) || 0) + 1)
    })
  let count = 0
  strMap.forEach((value, key) => {
    if (value === 1 && !strMap.has(key - 1) && !strMap.has(key + 1)) {
      count += 1
    }
  })

  return count
}

countLonelyLetters('ad') === 2
countLonelyLetters('abc') === 0
countLonelyLetters('Hello, World!') === 3
countLonelyLetters('A-dA') === 1
countLonelyLetters('zz') === 0

countLonelyLetters('') === 0
countLonelyLetters('123 !!!') === 0
countLonelyLetters('bdfhj') === 5
countLonelyLetters('a') === 1
countLonelyLetters('z') === 1
countLonelyLetters('iiiaii`ii') === 1
countLonelyLetters('iiiziii{iii') === 1
countLonelyLetters('iiiAiii@ii') === 1
countLonelyLetters('iiiZiii[iii') === 1

countLonelyLetters('Aa') === 0
countLonelyLetters('B!d') === 2
countLonelyLetters('C-c?e') === 1
