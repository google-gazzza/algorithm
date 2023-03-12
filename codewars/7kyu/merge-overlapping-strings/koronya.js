// [JS][7kyu] Merge overlapping strings
// merge-overlapping-strings
// https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/javascript

const mergeStrings = (first, second) => {
  const firstLen = first.length
  let findFlag = false
  let overlapLen = 0

  for (let i = 0; i < firstLen; i += 1 || 0) {
    const str = first.substring(i, firstLen)
    if (second.indexOf(str) === 0) {
      findFlag = true
      overlapLen = str.length
      break
    }
  }

  if (findFlag === true) {
    return first + second.substring(overlapLen)
  }
  return first + second
}

mergeStrings('abcde', 'cdefgh')

mergeStrings('abaab', 'aabab')

mergeStrings('abc', 'def')
mergeStrings('abc', 'abc')
mergeStrings('abaabaab', 'aabaabab')
