// [JS][6kyu] Gray Code
// gray-code
// https://www.codewars.com/kata/5416ce834c2460b4d300042d/train/javascript

const bin2gray = (bits) => {
  const n = bits.length
  const result = []
  result[0] = bits[0]

  for (let i = 1; i < n; i += 1) {
    result[i] = bits[i] ^ bits[i - 1]
  }

  return result
}

const gray2bin = (gray) => {
  const n = gray.length
  const result = []
  result[0] = gray[0]

  for (let i = 1; i < n; i += 1) {
    result[i] = result[i - 1] ^ gray[i]
  }

  return result
}

bin2gray([1, 1])
bin2gray([1, 0, 1])

gray2bin([1, 0])
gray2bin([1, 1, 1])
