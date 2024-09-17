// [JS][6kyu] Format words into a sentence
// format-words-into-a-sentence
// https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript

const formatWords = (words) => {
  if (!words) {
    return ''
  }
  const filteredWordList = words.filter((word) => !!word)
  if (filteredWordList.length === 0) {
    return ''
  }
  const last = filteredWordList.pop()
  const result = filteredWordList.join(', ') + (filteredWordList.length > 0 ? ' and ' : '') + last
  return result
}

formatWords(['one', 'two', 'three', 'four'])
formatWords(['one'])
formatWords(['one', '', 'three'])
formatWords(['', '', 'three'])
formatWords(['one', 'two', ''])
formatWords([])
formatWords(null)
formatWords([''])
