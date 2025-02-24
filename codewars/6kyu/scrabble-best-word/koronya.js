// [JS][6kyu] Scrabble best word
// scrabble-best-word
// https://www.codewars.com/kata/563f960e3c73813942000015/train/javascript

const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt(0)

const getBestWord = (points, words) => {
  const arr = words.map((word, wordIndex) => {
    return {
      point: word.split('').reduce((acc, cur, idx) => {
        acc += points[cur.charCodeAt(0) - CHAR_CODE_OF_UPPER_A]
        return acc
      }, 0),
      index: wordIndex,
      length: word.length,
    }
  })
  arr.sort((a, b) => (b.point !== a.point ? b.point - a.point : b.length !== a.length ? a.length - b.length : a.index - b.index))

  return arr[0].index
}

const points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10]
const simpleWords = ['WHO', 'IS', 'THE', 'BEST', 'OF', 'US']
const rndmWords = ['NOQ', 'TXAY', 'S', 'OM', 'ESFT', 'CJUKQ', 'QL', 'QO', 'ASTK', 'Y']
const firstBestWord = ['JGPCWVWFW', 'JXHNKBJJG']
const koroWords = ['ABCCYZ', 'XYZ', 'YZ']

getBestWord(points, simpleWords) === 0
getBestWord(points, rndmWords) === 5
getBestWord(points, firstBestWord) === 0
getBestWord(points, koroWords) === 1
