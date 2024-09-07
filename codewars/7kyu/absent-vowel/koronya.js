// [JS][7kyu] Absent vowel
// absent-vowel
// https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']

const absentVowel = (x) => {
  const xLower = x.toLowerCase()
  for (let i = 0; i < VOWEL_LIST.length; i += 1) {
    if (xLower.includes(VOWEL_LIST[i]) === false) {
      return i
    }
  }
}

absentVowel('John Doe hs seven red pples under his bsket') === 0
absentVowel('Bb Smith sent us six neatly arranged range bicycles') === 3
