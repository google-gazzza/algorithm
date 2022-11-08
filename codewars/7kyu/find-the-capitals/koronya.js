// [JS][7kyu] Find the capitals
// find-the-capitals
// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

const capitals = (word) => {
  const result = []
  const wordLen = word.length
  for (let i = 0; i < wordLen; i += 1 || 0) {
    const str = word[i]
    if (str.toUpperCase() === str) {
      result.push(i)
    }
  }

  return result
}

capitals('CodEWaRs')
