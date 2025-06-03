// [JS][7kyu] Figure Out the Notes
// figure-out-the-notes
// https://www.codewars.com/kata/5602e85d255e3240c2000024/train/javascript

const SCALE_LIST = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const SCALE_LENGTH = SCALE_LIST.length

const whatNote = (string, fret) => {
  const noteIndex = SCALE_LIST.indexOf(string.toUpperCase())
  const newIndex = (noteIndex + fret) % SCALE_LENGTH
  return SCALE_LIST[newIndex]
}

whatNote('e', 0) === 'E'
whatNote('D', 5) === 'G'
whatNote('E', 18) === 'A#'
whatNote('A', 1) === 'A#'
whatNote('B', 8) === 'G'
