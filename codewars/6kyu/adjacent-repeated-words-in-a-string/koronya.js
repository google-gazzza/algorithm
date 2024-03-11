// [JS][6kyu] Adjacent repeated words in a string
// adjacent-repeated-words-in-a-string
// https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/javascript

const countAdjacentPairs = (searchString) => {
  if (searchString === '') {
    return 0
  }
  const words = searchString.toLowerCase().split(' ')
  const wordsLen = words.length
  let prev = words[0]
  let prevCount = 1
  let result = 0
  for (let i = 1; i < wordsLen; i += 1) {
    const word = words[i]
    if (word === prev) {
      prevCount += 1
    } else {
      if (prevCount > 1) {
        result += 1
      }
      prev = word
      prevCount = 1
    }
  }
  if (prevCount > 1) {
    result += 1
  }

  return result
}

countAdjacentPairs('') === 0
countAdjacentPairs('orange Orange kiwi pineapple apple') === 1
countAdjacentPairs('banana banana banana') === 1
countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!') === 2
countAdjacentPairs('pineapple apple') === 0
