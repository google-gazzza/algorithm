// [JS][6kyu] Inverted Ranges
// inverted-ranges
// https://www.codewars.com/kata/60db06ded6c39e002ee35910/train/javascript

const invertedRanges = (ranges) => {
  const rangeSet = new Set(Array.from({ length: 101 }, (_, i) => i))
  ranges.forEach(([start, end]) => {
    for (let i = start; i <= end; i += 1) {
      rangeSet.delete(i)
    }
  })
  const result = []
  for (let i = 0; i < 101; i += 1) {
    if (rangeSet.has(i)) {
      const start = i
      while (i < 101 && rangeSet.has(i)) {
        i += 1
      }
      const end = i - 1
      result.push([start, end])
      console.log(`[${start}, ${end}]`)
    }
  }
  return result
}

invertedRanges([[0, 100]])
invertedRanges([
  [0, 50],
  [51, 100],
])

invertedRanges([])

invertedRanges([
  [0, 25],
  [51, 75],
])
invertedRanges([[25, 50]])
