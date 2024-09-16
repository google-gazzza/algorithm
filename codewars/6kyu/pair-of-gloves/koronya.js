// [JS][6kyu] Pair of gloves
// pair-of-gloves
// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

const numberOfPairs = (gloves) => {
  const glovesMap = new Map()
  gloves.forEach((glove) => {
    glovesMap.set(glove, (glovesMap.get(glove) || 0) + 1)
  })
  return [...glovesMap].map(([glove, count]) => [glove, Math.floor(count / 2)]).reduce((acc, cur) => acc + cur[1], 0)
}

numberOfPairs(['red', 'green', 'red', 'blue', 'blue'])
numberOfPairs(['red', 'red', 'red', 'red', 'red', 'red'])
