// [JS][5kyu] Translate DNA in 6 frames
// translate-dna-in-6-frames
// https://www.codewars.com/kata/5708ef48fe2d018413000776/train/javascript

const getArray = (str, frame) => {
  let start = frame > 0 ? frame - 1 : -1 * frame - 1
  const strLen = str.length
  const result = []
  while (start < strLen) {
    if (str[start + 3 - 1]) {
      result.push(str.slice(start, start + 3))
    }
    start += 3
  }

  return result
}

const getReversedReverseFrame = (str) => {
  return str
    .split('')
    .map((char) => {
      switch (char) {
        case 'A':
          return 'T'
        case 'G':
          return 'C'
        case 'T':
          return 'A'
        case 'C':
          return 'G'
        default:
          return ''
      }
    })
    .reverse()
    .join('')
}

const translateWithFrame = (dna, frames = [1, 2, 3, -1, -2, -3]) => {
  const reversedReverseFrame = getReversedReverseFrame(dna)
  const arr = frames.map((frame) => (frame > 0 ? getArray(dna, frame) : getArray(reversedReverseFrame, frame)))
  return arr.map((item) => item.map((codon) => codons[codon]).join(''))
}

// translateWithFrame('AAA', [1])
// translateWithFrame('AAA', [2])
