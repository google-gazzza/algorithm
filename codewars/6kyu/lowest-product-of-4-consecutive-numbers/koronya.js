// [JS][6kyu] Lowest product of 4 consecutive numbers
// lowest-product-of-4-consecutive-numbers
// https://www.codewars.com/kata/554e52e7232cdd05650000a0/train/javascript

const lowestProduct = (input) => {
  const inputLen = input.length
  if (inputLen < 4) {
    return 'Number is too small'
  }
  if (input.includes('0')) {
    return 0
  }
  let arr = [input[0], input[1], input[2], input[3]].map((item) => Number(item))
  let prev = arr.reduce((acc, cur) => acc * cur, 1)
  let min = prev
  for (let i = 4; i < inputLen; i += 1 || 0) {
    const item = Number(input[i])
    prev = (prev / arr.shift()) * item
    min = Math.min(min, prev)
    arr.push(item)
  }
  return min
}

const lowestProduct2 = (input) => {
  const inputLen = input.length
  if (inputLen < 4) {
    return 'Number is too small'
  }
  let min = input[0] * input[1] * input[2] * input[3]
  for (let i = 4; i < inputLen; i += 1 | 0) {
    const temp = input[i - 3] * input[i - 2] * input[i - 1] * input[i]
    if (min > temp) {
      min = temp
    }
  }
  return min
}

lowestProduct('123456789') === 24
lowestProduct('234567899') === 120
lowestProduct('2345611117899') === 1
lowestProduct('333') === 'Number is too small'
lowestProduct('1234111') === 4
lowestProduct('7502874905')
