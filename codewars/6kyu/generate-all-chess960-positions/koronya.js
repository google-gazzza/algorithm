// [JS][6kyu] Generate All Chess960 Positions
// generate-all-chess960-positions
// https://www.codewars.com/kata/68124e39db8239f29060235b/train/javascript

const uniquePermutations = (s) => {
  const count = new Map()
  for (const ch of s) {
    count.set(ch, (count.get(ch) ?? 0) + 1)
  }
  const chars = Array.from(count.keys()).sort()
  const n = s.length
  const path = new Array(n)
  const result = []

  const dfs = (pos) => {
    if (pos === n) {
      result.push(path.join(''))
      return
    }
    for (const ch of chars) {
      const c = count.get(ch)
      if (!c) {
        continue
      }
      count.set(ch, c - 1)
      path[pos] = ch
      dfs(pos + 1)
      count.set(ch, c)
    }
  }

  dfs(0)
  return result
}

const ARR = uniquePermutations('bbnnqrkr')
const VALID_ARR = ARR.filter((item) => {
  const firstBIndex = item.indexOf('b')
  const lastBIndex = item.lastIndexOf('b')
  const firstRIndex = item.indexOf('r')
  const lastRIndex = item.lastIndexOf('r')
  const kIndex = item.indexOf('k')
  if ((lastBIndex - firstBIndex) % 2 === 0) {
    return false
  }
  if (firstRIndex > kIndex || lastRIndex < kIndex) {
    return false
  }

  return true
})

const getChess960Position = (n) => {
  const str = VALID_ARR[n - 1]
  const firstRow = str.split('').join(' ')
  const lastRow = str.toUpperCase().split('').join(' ')
  const secondRow = 'p p p p p p p p'
  const emptyRow = '. . . . . . . .'
  const lastTwoRow = 'P P P P P P P P'

  return [firstRow, secondRow, emptyRow, emptyRow, emptyRow, emptyRow, lastTwoRow, lastRow].join('\n') + '\n'
}

// getChess960Position(1)
// getChess960Position(960)
