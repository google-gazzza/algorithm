// [JS][7kyu] Musical Pitch Classes
// musical-pitch-classes
// https://www.codewars.com/kata/54d472e98776e4eb5b000215/train/javascript

const mappedObj = {
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
  A: 9,
  B: 11,
}

const modifyCycleNumber = (num) => {
  if (num === 12) {
    return 0
  } else if (num === -1) {
    return 11
  }
  return num
}

const pitchClass = (note) => {
  if (note.length === 1) {
    return mappedObj[note]
  }
  if (note.length === 2) {
    if (['#', 'b'].includes(note[1]) === false) {
      return null
    }
    const modify = note[1] === '#' ? 1 : -1
    const result = mappedObj[note[0]] + modify
    return modifyCycleNumber(result)
  }
  return null
}

pitchClass('D') === 2
pitchClass('D#') === 3
pitchClass('Ab') === 8

pitchClass('C')
pitchClass('Cb')
pitchClass('B#')

pitchClass('Dc') === null
