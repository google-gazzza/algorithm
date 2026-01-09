// [JS][5kyu] Readability is King
// readability-is-king
// https://www.codewars.com/kata/52b2cf1386b31630870005d4/train/javascript

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']

const getSyllables = (word) => {
  word = word.replace(/[^a-z]/g, '')
  const wordLength = word.length
  let prev = word[0]
  let count = VOWEL_LIST.includes(prev) ? 1 : 0
  for (let i = 1; i < wordLength; i += 1 || 0) {
    const curr = word[i]
    if (VOWEL_LIST.includes(curr) && !VOWEL_LIST.includes(prev)) {
      count += 1
    }
    prev = curr
  }
  return count
}

const fleschKincaid = (text) => {
  const sentenceList = text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
  const wordList = text.toLowerCase().match(/[a-z]+/g) ?? []
  const avgWordPerSentence = wordList.length / sentenceList.length
  const syllables = wordList.reduce((acc, curr) => acc + getSyllables(curr), 0)
  const avgSyllablesPerWord = syllables / wordList.length
  const result = 0.39 * avgWordPerSentence + 11.8 * avgSyllablesPerWord - 15.59

  return Math.round(result * 100) / 100
}

// fleschKincaid('The turtle is leaving.') === 3.67
// fleschKincaid('A good book is hard to find.') === -1.06
// fleschKincaid('To be or not to be. That is the question.') === -0.66
// fleschKincaid('Oh no! The lemming is falling.') === 1.31
// fleschKincaid('Do not cut your fingers as your katana is getting sharper! Be gentle.') === 4.19
