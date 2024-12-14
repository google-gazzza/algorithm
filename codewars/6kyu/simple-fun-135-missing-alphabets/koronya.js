// [JS][6kyu] Simple Fun #135: Missing Alphabets
// simple-fun-135-missing-alphabets
// https://www.codewars.com/kata/58a664bb586e986c940001d5

const LOWER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const missingAlphabets = (s) => {
  const charMap = new Map()
  LOWER_ALPHABET.split('').forEach((char) => {
    charMap.set(char, 0)
  })
  s.split('').forEach((char) => {
    charMap.set(char, charMap.get(char) + 1)
  })
  const maxCount = Math.max(...Array.from(charMap.values()))
  return [...charMap].map(([char, count]) => char.repeat(maxCount - count)).join('')
}

missingAlphabets('abcdefghijklmnopqrstuvwxy') === 'z'
missingAlphabets('abcdefghijklmnopqrstuvwxyz') === ''
missingAlphabets('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy') === 'zz'
missingAlphabets('abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy') === 'ayzz'
missingAlphabets('codewars') === 'bfghijklmnpqtuvxyz'
