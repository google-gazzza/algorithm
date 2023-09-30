// [JS][6kyu] All Star Code Challenge #15
// all-star-code-challenge-15
// https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript

const rotate = (str) => {
  const strLen = str.length
  const result = []
  if (strLen === 0) {
    return result
  }
  for (let i = 1; i < strLen; i += 1 || 0) {
    result.push(str.slice(i) + str.slice(0, i))
  }
  result.push(str)
  return result
}

rotate('Hello')
rotate('')
