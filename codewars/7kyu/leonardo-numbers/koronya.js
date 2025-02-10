// [JS][7kyu] Leonardo numbers
// leonardo-numbers
// https://www.codewars.com/kata/5b2117eea454c89d4400005f/train/javascript

const L = (n, L0, L1, add) => {
  const nMap = new Map()
  nMap.set(0, L0)
  nMap.set(1, L1)
  for (let i = 2; i < n; i += 1) {
    nMap.set(i, nMap.get(i - 1) + nMap.get(i - 2) + add)
  }

  return [...nMap].map(([_, value]) => value)
}

L(5, 1, 1, 1)
L(5, 0, 0, 2)
L(5, 0, 0, 0)
