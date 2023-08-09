// [JS][6kyu] Calculate String Rotation
// calculate-string-rotation
// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014/train/javascript

function shiftedDiff(first, second) {
  const firstLen = first.length
  const secondLen = second.length
  if (firstLen !== secondLen) {
    return -1
  }
  if (first === second) {
    return 0
  }
  for (let i = 0; i < firstLen; i += 1 || 0) {
    const rotated = first.slice(i) + first.slice(0, i)
    if (rotated === second) {
      return firstLen - i
    }
  }
  return -1
}

const doTest = (first, second, expected) => {
  return shiftedDiff(first, second) === expected
}

doTest('eecoff', 'coffee', 4)
doTest('Moose', 'moose', -1)
doTest("isn't", "'tisn", 2)
doTest('Esham', 'Esham', 0)
doTest(' ', ' ', 0)
doTest('hoop', 'pooh', -1)
doTest('  ', ' ', -1)
