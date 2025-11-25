// [JS][6kyu] Integer to Musical Pitch Classes
// integer-to-musical-pitch-classes
// https://www.codewars.com/kata/54d84dc118438a0eed000a42/train/javascript

const arr = [
  { number: -1, pitchClass: 'B' },
  { number: 0, pitchClass: 'C' },
  { number: 2, pitchClass: 'D' },
  { number: 4, pitchClass: 'E' },
  { number: 5, pitchClass: 'F' },
  { number: 7, pitchClass: 'G' },
  { number: 9, pitchClass: 'A' },
  { number: 11, pitchClass: 'B' },
  { number: 12, pitchClass: 'C' },
  { number: 14, pitchClass: 'D' },
]

const toPitchClass = (n) => {
  return arr
    .filter((item) => Math.abs(item.number - n) <= 2)
    .map((item) => {
      const diff = n - item.number
      switch (diff) {
        case 0:
          return item.pitchClass
        case 1:
        case -1:
          return diff > 0 ? item.pitchClass + '#' : item.pitchClass + 'b'
        case 2:
        case -2:
          return diff > 0 ? item.pitchClass + 'x' : item.pitchClass + 'bb'
      }
    })
}

toPitchClass(6)
toPitchClass(0)
toPitchClass(8)
