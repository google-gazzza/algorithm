// [JS][7kyu] Spot the Differences
// spot-the-differences
// https://www.codewars.com/kata/5881460c780e0dd207000084/train/javascript

const spot = (s1, s2) => {
  const strLen = s1.length
  const result = []
  for (let i = 0; i < strLen; i += 1 || 0) {
    if (s1[i] !== s2[i]) {
      result.push(i)
    }
  }
  return result
}

spot('abcdefg', 'abcqetg')
spot('Hello World!', 'hello world.')
spot('FixedGrey', 'FixedGrey')
