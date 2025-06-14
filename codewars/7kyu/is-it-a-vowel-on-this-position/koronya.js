// [JS][7kyu] Is it a vowel on this position?
// is-it-a-vowel-on-this-position
// https://www.codewars.com/kata/5a2b7edcb6486a856e00005b/train/javascript

const VOWEL_LIST = 'aeiouAEIOU'
const checkVowel = (string, position) => {
  if (position < 0 || position >= string.length) {
    return false
  }
  return VOWEL_LIST.includes(string[position])
}

checkVowel('cat', 1) === true
checkVowel('cat', 0) === false
checkVowel('cat', 4) === false

checkVowel('Amanda', -2) === false
checkVowel('Amanda', 0) === true
checkVowel('Amanda', 2) === true
