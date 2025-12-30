// [JS][6kyu] Word Segmentation: MaxMatch
// word-segmentation-max-match
// https://www.codewars.com/kata/5be350bcce5afad8020000d6/train/javascript

const VALID_WORDS = ['good', 'luck', 'happy', 'in', 'go']

const validSet = new Set(VALID_WORDS)

const maxMatch = (sentence) => {
  const sentenceLength = sentence.length
  const result = []
  let start = 0

  while (start < sentenceLength) {
    let validStr = sentence[start]
    for (let end = start + 1; end < sentenceLength; end += 1) {
      const str = sentence.substring(start, end + 1)
      if (validSet.has(str)) {
        validStr = str
      }
    }
    result.push(validStr)
    start += validStr.length
  }

  return result
}

maxMatch('goodluck')
maxMatch('ewingsa')
