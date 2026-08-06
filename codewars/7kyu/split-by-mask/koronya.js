// [JS][7kyu] Split by Mask
// split-by-mask
// https://www.codewars.com/kata/6a68ed7894f29599a1f7a248/train/javascript

const split = (string, mask) => {
  const total = mask.reduce((acc, curr) => acc + curr, 0)
  if (string.length !== total) {
    return null
  }
  let start = 0
  const result = []
  mask.forEach((count) => {
    result.push(string.substring(start, start + count))
    start += count
  })
  return result
}

split('1234567890', [3, 3, 4])
split('codewars', [4, 4])

split('', [])
split('', [1])
split('codewars', [4, 4, 4])
