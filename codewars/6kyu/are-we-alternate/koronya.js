// [JS][6kyu] Are we alternate?
// are-we-alternate
// https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript

const vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])

const isVowel = (str) => vowelSet.has(str)

const isAlt = (word) => {
  const wordLen = word.length
  let prev = isVowel(word[0])
  for (let i = 1; i < wordLen; i += 1 || 0) {
    const cur = isVowel(word[i])
    if (prev === cur) {
      return false
    }
    prev = cur
  }
  return true
}

isAlt('amazon')
isAlt('apple')
isAlt('banana')
