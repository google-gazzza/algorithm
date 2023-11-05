// [JS][6kyu] Piano Kata, Part 1
// piano-kata-part-1
// https://www.codewars.com/kata/589273272fab865136000108/train/javascript

const TOTAL_KEY_COUNT = 88
const ONE_OCTAVE_KEY_COUNT = 12
const WHITE_KEY_LIST = [1, 3, 4, 6, 8, 9, 11, 13, 15]

const blackOrWhiteKey = (keyPressCount) => {
  const firstAdjustNumber = keyPressCount % TOTAL_KEY_COUNT
  if (firstAdjustNumber < 16) {
    return firstAdjustNumber === 0 || WHITE_KEY_LIST.includes(firstAdjustNumber) ? 'white' : 'black'
  }
  const secondAdjustNumber = firstAdjustNumber % ONE_OCTAVE_KEY_COUNT
  return WHITE_KEY_LIST.includes(secondAdjustNumber) ? 'white' : 'black'
}

blackOrWhiteKey(1) === 'white'
blackOrWhiteKey(5) === 'black'
blackOrWhiteKey(12) === 'black'
blackOrWhiteKey(42) === 'white'
blackOrWhiteKey(88) === 'white'
blackOrWhiteKey(89) === 'white'
blackOrWhiteKey(92) === 'white'
blackOrWhiteKey(100) === 'black'
blackOrWhiteKey(111) === 'white'
blackOrWhiteKey(200) === 'black'
blackOrWhiteKey(2017) === 'white'
