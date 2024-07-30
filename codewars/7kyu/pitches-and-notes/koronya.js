// [JS][7kyu] Pitches and Notes
// pitches-and-notes
// https://www.codewars.com/kata/5a0599908ba914a6cf000138/train/python

const getNote = (pitch) => {
  while (pitch > 830.61) {
    pitch /= 2
  }
  while (pitch < 440) {
    pitch *= 2
  }
  return notesDictionary[pitch]
}

getNote(440) === 'A'
getNote(220) === 'A'
getNote(880) === 'A'

getNote(523.25) === 'C'
getNote(261.625) === 'C'
getNote(1046.5) === 'C'
