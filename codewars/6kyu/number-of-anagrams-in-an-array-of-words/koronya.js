// [JS][6kyu] Number of anagrams in an array of words
// number-of-anagrams-in-an-array-of-words
// https://www.codewars.com/kata/587e18b97a25e865530000d8/train/javascript

const getUniqueWord = (str) => str.split('').sort().join('')
const getNc2 = (n) => (n * (n - 1)) / 2

const anagramCounter = (wordsArray) => {
  const wordMap = new Map()
  wordsArray.forEach((word) => {
    const uniqueWord = getUniqueWord(word)
    if (wordMap.has(uniqueWord)) {
      wordMap.set(uniqueWord, wordMap.get(uniqueWord) + 1)
    } else {
      wordMap.set(uniqueWord, 1)
    }
  })
  return [...wordMap]
    .filter(([_, value]) => value > 1)
    .reduce((acc, [_, value]) => {
      acc += getNc2(value)
      return acc
    }, 0)
}

// anagramCounter(['dell', 'ledl', 'abc', 'cba']) === 2
// anagramCounter(['dell', 'ledl', 'lled', 'cba']) === 3
// anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab']) === 11
