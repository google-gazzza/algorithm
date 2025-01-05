// [JS][6kyu] #01 - Music theory - Minor/Major chords
// 01-music-theory-minor-major-chords
// https://www.codewars.com/kata/57052ac958b58fbede001616/train/javascript

const CHORD_MAP = new Map([
  ['C', 0],
  ['C#', 1],
  ['Db', 1],
  ['D', 2],
  ['D#', 3],
  ['Eb', 3],
  ['E', 4],
  ['F', 5],
  ['F#', 6],
  ['Gb', 6],
  ['G', 7],
  ['G#', 8],
  ['Ab', 8],
  ['A', 9],
  ['A#', 10],
  ['Bb', 10],
  ['B', 11],
])

const getDistance = (a, b) => {
  const distance = CHORD_MAP.get(b) - CHORD_MAP.get(a)
  return distance < 0 ? distance + 12 : distance
}

const minorOrMajor = (chord) => {
  const chordArr = chord.split(' ')
  if (chordArr.length !== 3) {
    return 'Not a chord'
  }
  const distance1 = getDistance(chordArr[0], chordArr[1])
  const distance2 = getDistance(chordArr[1], chordArr[2])
  if (distance1 === 3 && distance2 === 4) {
    return 'Minor'
  }
  if (distance1 === 4 && distance2 === 3) {
    return 'Major'
  }
  return 'Not a chord'
}

minorOrMajor('C E G') === 'Major'
minorOrMajor('Db F Ab') === 'Major'
minorOrMajor('D F# A') === 'Major'

minorOrMajor('C Eb G') === 'Minor'
minorOrMajor('C# E G#') === 'Minor'
minorOrMajor('D F A') === 'Minor'

minorOrMajor('C D G') === 'Not a chord'
minorOrMajor('A C D') === 'Not a chord'
minorOrMajor('A C# D#') === 'Not a chord'
