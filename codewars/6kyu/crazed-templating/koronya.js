// [JS][6kyu] Crazed Templating
// crazed-templating
// https://www.codewars.com/kata/58439be66f5fc42e30000076/train/javascript

const getCommonChar = (arr, index) => {
  const char = arr[0][index]
  return arr.every((item) => item[index] === char) ? char : '*'
}

const letterPattern = (words) => {
  const wordLen = words[0].length
  return Array.from({ length: wordLen }, (_, i) => {
    return getCommonChar(words, i)
  }).join('')
}

letterPattern(['family']) === 'family'
letterPattern(['same', 'same', 'same']) === 'same'

letterPattern(['war', 'rad', 'dad']) === '*a*'
letterPattern(['ab', 'ac', 'ad', 'ae']) === 'a*'

letterPattern(['general', 'admiral', 'piglets', 'secrets']) === '*******'
