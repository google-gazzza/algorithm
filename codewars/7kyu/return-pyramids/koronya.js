// [JS][7kyu] Return pyramids
// return-pyramids
// https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b/train/javascript

const pyramid = (n) => {
  const lastLineLength = 2 * (n - 1)
  const arr = []
  for (let i = lastLineLength / 2, j = 0; i >= 0, j < n; i -= 1, j += 1) {
    const spaces = ' '.repeat(i)
    const middle = i === 0 ? '_'.repeat(2 * j) : ' '.repeat(2 * j)
    const line = `${spaces}/${middle}\\\n`
    arr.push(line)
  }

  return arr.join('')
}

pyramid(1) === '/\\\n'
pyramid(2) === ' /\\\n/__\\\n'
pyramid(4) === '   /\\\n  /  \\\n /    \\\n/______\\\n'
pyramid(6) === '     /\\\n    /  \\\n   /    \\\n  /      \\\n /        \\\n/__________\\\n'
pyramid(10) ===
  '         /\\\n        /  \\\n       /    \\\n      /      \\\n     /        \\\n    /          \\\n   /            \\\n  /              \\\n /                \\\n/__________________\\\n'
