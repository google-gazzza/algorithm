// [JS][7kyu] Make a square box!
// make-a-square-box
// https://www.codewars.com/kata/58644e8ddf95f81a38001d8d/train/javascript

const box = (n) => {
  const LINE = '-' + ' '.repeat(n - 2) + '-'
  const FULL_LINE = '-'.repeat(n)
  return Array.from({ length: n }).map((_, index) => (index === 0 || index === n - 1 ? FULL_LINE : LINE))
}

// box(3)
//   box(5)
