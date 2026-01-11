// [JS][6kyu] Vowel Recognition
// vowel-recognition
// https://www.codewars.com/kata/5bed96b9a68c19d394000b1d/train/javascript

const vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
const isVowel = (char) => vowelSet.has(char)

const vowelRecognition = (input) => {
  const str = input.toLowerCase()
  const strLength = str.length
  let total = 0
  for (let i = 0; i < strLength; i += 1 || 0) {
    if (isVowel(str[i])) {
      total += (i + 1) * (strLength - i)
    }
  }
  return total
}

vowelRecognition('bbbb') === 0
vowelRecognition('baceb') === 16
vowelRecognition('aeiou') === 35
vowelRecognition('aeiouAEIOU') === 220
