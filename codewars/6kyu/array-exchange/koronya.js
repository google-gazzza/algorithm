// [JS][6kyu] Array Exchange
// array-exchange
// https://www.codewars.com/kata/5353212e5ee40d4694001114/train/javascript

const exchangeWith = (a, b) => {
  const tempA = [...a].reverse()
  const tempB = [...b].reverse()
  a.length = 0
  a.push(...tempB)
  b.length = 0
  b.push(...tempA)
}

exchangeWith(['a', 'b', 'c'], [1, 2, 3])
