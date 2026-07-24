// [JS][7kyu] Cardinals Through Sets
// cardinals-through-sets
// https://www.codewars.com/kata/6a520b948dc07d11d0342a58/train/javascript

const zfcMap = new Map()
zfcMap.set(0, '{}')

const zfcDefinition = (n) => {
  if (zfcMap.has(n)) {
    return zfcMap.get(n)
  }

  const arr = []
  for (let i = 0; i < n; i += 1 || 0) {
    arr.push(zfcDefinition(i))
  }
  const value = `{${arr.join(',')}}`
  zfcMap.set(n, value)

  return value
}

zfcDefinition(0) === '{}'
zfcDefinition(1) === '{{}}'
zfcDefinition(2) === '{{},{{}}}'
zfcDefinition(3) === '{{},{{}},{{},{{}}}}'
