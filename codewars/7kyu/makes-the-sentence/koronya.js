// [JS][7kyu] Makes the Sentence
// makes-the-sentence
// https://www.codewars.com/kata/59fb4d89ff58e5e816002efc/train/javascript

const makesTheSentence = (characterArray, sentenceString) => {
  const charMap = new Map()
  characterArray.forEach((c) => charMap.set(c, (charMap.get(c) || 0) + 1))
  const sentenceMap = new Map()
  for (const c of sentenceString) {
    if (c !== ' ') {
      sentenceMap.set(c, (sentenceMap.get(c) || 0) + 1)
    }
  }
  for (const [c, count] of sentenceMap) {
    if (charMap.get(c) !== count) {
      return false
    }
  }

  return true
}

makesTheSentence(['D', 'u', 'c', 'k', 's', 'q', 'u', 'a', 'c', 'k', '.'], 'Ducks quack.') === true
makesTheSentence(['S', 'h', 'e', 'a', 'd', 's', '.'], 'She adds.') === false
makesTheSentence(['h', 'e', 'r', 'a', 'n', '.'], 'He ran.') === false
makesTheSentence(['?', 'F', 'N', 'V', 'Z', 'b', 'c', 'e', 'q', 'q', 'q', 'r', 's', 'y'], 'IXsn JckqVqN?') === false
