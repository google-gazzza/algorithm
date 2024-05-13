// [JS][6kyu] Padovan numbers
// padovan-numbers
// https://www.codewars.com/kata/5803ee0ed5438edcc9000087/train/javascript

const padovanMap = new Map([
  [0, 1],
  [1, 1],
  [2, 1],
])

const padovan = (n) => {
  if (padovanMap.has(n)) {
    return padovanMap.get(n)
  }
  const p = padovan(n - 2) + padovan(n - 3)
  padovanMap.set(n, p)

  return p
}

padovan(9)
