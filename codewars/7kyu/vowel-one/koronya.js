// [JS][7kyu] Vowel one
// vowel-one
// https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript

const isVowel = (char) => {
  const vowels = 'aeiouAEIOU'
  return vowels.includes(char)
}

const vowelOne = (s) =>
  s
    .split('')
    .map((char) => (isVowel(char) ? 1 : 0))
    .join('')

vowelOne('vowelOne') === '01010101'
vowelOne('123, arou') === '000001011'
