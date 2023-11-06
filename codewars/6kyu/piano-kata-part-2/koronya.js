// [JS][6kyu] Piano Kata, Part 2
// piano-kata-part-2
// https://www.codewars.com/kata/589631d24a7323d18d00016f/train/javascript

const firstKeyMap = new Map([
  [0, 'C'],
  [1, 'A'],
  [2, 'A#'],
  [3, 'B'],
])
const secondKeyMap = new Map([
  [0, 'C'],
  [1, 'C#'],
  [2, 'D'],
  [3, 'D#'],
  [4, 'E'],
  [5, 'F'],
  [6, 'F#'],
  [7, 'G'],
  [8, 'G#'],
  [9, 'A'],
  [10, 'A#'],
  [11, 'B'],
])
const TOTAL_KEY_COUNT = 88
const ONE_OCTAVE_KEY_COUNT = 12

const whichNote = (keyPressCount) => {
  const firstAdjustNumber = keyPressCount % TOTAL_KEY_COUNT
  if (firstAdjustNumber < 4) {
    return firstKeyMap.get(firstAdjustNumber)
  }
  const secondAdjustNumber = (firstAdjustNumber - 4) % ONE_OCTAVE_KEY_COUNT
  return secondKeyMap.get(secondAdjustNumber)
}

whichNote(1) === 'A'
whichNote(2) === 'A#'
whichNote(3) === 'B'
whichNote(88) === 'C'

whichNote(1) === 'A'
whichNote(5) === 'C#'
whichNote(12) === 'G#'
whichNote(42) === 'D'
whichNote(88) === 'C'
whichNote(89) === 'A'
whichNote(92) === 'C'
whichNote(100) === 'G#'
whichNote(111) === 'G'
whichNote(200) === 'G#'
whichNote(2017) === 'F'
