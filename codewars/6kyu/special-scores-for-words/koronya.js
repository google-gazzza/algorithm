// [JS][6kyu] Special Scores For Words
// special-scores-for-words
// https://www.codewars.com/kata/563c9f8073ccb1464d0000ae/train/javascript

const getSsw = (str) => str.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0)

const wordMap = new Map()
wordList.forEach((word) => {
  const ssw = getSsw(word)
  const wordLen = word.length
  if (wordMap.has(wordLen)) {
    wordMap.get(wordLen).push({ ssw, word })
  } else {
    wordMap.set(wordLen, [{ ssw, word }])
  }
})

const findWord = (num_let, max_ssw) => {
  if (!wordMap.has(num_let)) {
    return null
  }
  const candidateList = wordMap.get(num_let).filter((word) => word.ssw <= max_ssw)
  if (candidateList.length === 0) {
    return null
  }

  return candidateList.sort((a, b) => {
    if (a.ssw === b.ssw) {
      return b.word.localeCompare(a.word)
    }
    return b.ssw - a.ssw
  })[0].word
}

findWord(8, 888) === 'southern'
findWord(9, 500) === null
findWord(7, 1412) === 'support'
