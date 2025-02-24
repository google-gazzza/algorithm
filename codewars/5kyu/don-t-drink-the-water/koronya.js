// [JS][5kyu] Don't Drink the Water
// don-t-drink-the-water
// https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/train/javascript

const getSeparateArr = (arr, number) => {
  const result = []
  for (let i = 0; i < arr.length; i += number) {
    result.push(arr.slice(i, i + number))
  }
  return result
}

const separateLiquids = (glass) => {
  const densityMap = new Map([
    ['O', { density: 0.8 }],
    ['A', { density: 0.87 }],
    ['W', { density: 1.0 }],
    ['H', { density: 1.36 }],
  ])
  const rowLen = glass.length
  if (rowLen === 0) {
    return []
  }
  const colLen = glass[0].length

  glass.forEach((row) =>
    row.forEach((item) => {
      densityMap.get(item).count = (densityMap.get(item).count || 0) + 1
    }),
  )
  const filteredArr = [...densityMap].filter((item) => item[1].count > 0)

  const temp = []
  filteredArr.forEach((item) => {
    const [key, value] = item
    for (let i = 0; i < value.count; i++) {
      temp.push(key)
    }
  })

  return getSeparateArr(temp, colLen)
}

separateLiquids([
  ['H', 'H', 'W', 'O'],
  ['W', 'W', 'O', 'W'],
  ['H', 'H', 'O', 'O'],
])

separateLiquids([
  ['A', 'A', 'O', 'H'],
  ['A', 'H', 'W', 'O'],
  ['W', 'W', 'A', 'W'],
  ['H', 'H', 'O', 'O'],
])

separateLiquids([['A', 'H', 'W', 'O']])

separateLiquids([['A'], ['H'], ['W'], ['O']])

separateLiquids([])
