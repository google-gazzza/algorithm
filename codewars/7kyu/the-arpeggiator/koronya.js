// [JS][7kyu] The Arpeggiator
// the-arpeggiator
// https://www.codewars.com/kata/563c823393305ec84e000048/train/javascript

const VALID_ROOT = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const VALID_ROOT_LENGTH = VALID_ROOT.length

const arpeggio = (notes) => {
  if (!VALID_ROOT.includes(notes)) {
    return undefined
  }
  const rootIndex = VALID_ROOT.indexOf(notes)
  const arr = [rootIndex, (rootIndex + 2) % VALID_ROOT_LENGTH, (rootIndex + 4) % VALID_ROOT_LENGTH, (rootIndex + 7) % VALID_ROOT_LENGTH]
  return arr.map((index) => VALID_ROOT[index])
}

arpeggio('B')
arpeggio('Z')
arpeggio('A')
arpeggio('c')
arpeggio('C')
