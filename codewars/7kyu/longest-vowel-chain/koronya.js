// [JS][7kyu] Longest vowel chain
// longest-vowel-chain
// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

const VOWELS = ['a', 'e', 'i', 'o', 'u']

const solve = (s) => {
  let max = 0
  s.split('').reduce((acc, cur) => {
    if (VOWELS.includes(cur) === true) {
      acc += 1
    } else {
      max = Math.max(acc, max)
      acc = 0
    }
    return acc
  }, 0)

  return max
}

solve('codewarriors') === 2
solve('suoidea') === 3
solve('ultrarevolutionariees') === 3
solve('strengthlessnesses') === 1
solve('cuboideonavicuare') === 2
solve('chrononhotonthuooaos') === 5
solve('iiihoovaeaaaoougjyaw') === 8
