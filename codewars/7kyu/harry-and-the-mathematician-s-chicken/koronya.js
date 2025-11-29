// [JS][7kyu] Harry and the Mathematician's Chicken
// harry-and-the-mathematician-s-chicken
// https://www.codewars.com/kata/59d12056dcc405ac130000d3/train/javascript

const chickenOptions = (n) => {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    return [0]
  }
  const resultSet = new Set()
  for (let i = 0; i * 10 <= n; i += 1 || 0) {
    const start = i * 10
    for (let j = 0; start + j * 3 <= n; j += 1 || 0) {
      resultSet.add(start + j * 3)
    }
  }

  return Array.from(resultSet).sort((a, b) => a - b)
}

chickenOptions(13)
chickenOptions(2)
chickenOptions(21)
chickenOptions('mmmmm chicken')
