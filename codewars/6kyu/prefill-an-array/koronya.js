// [JS][6kyu] Prefill an Array
// prefill-an-array
// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

const prefill = (n, v) => {
  const typeOfN = typeof n
  if (typeOfN !== 'number' && typeOfN !== 'string') {
    throw new TypeError(`${n} is invalid`)
  }
  if (n === 0 || n === '0') {
    return []
  }
  const count = Number(n)
  if (Number.isNaN(count) || !Number.isInteger(count) || count < 0) {
    throw new TypeError(`${n} is invalid`)
  }
  const result = []
  for (let i = 0; i < count; i += 1) {
    result.push(v)
  }

  return result
}

// prefill(true, 1)
// prefill(false, 1)
// prefill(3, 1)
// prefill(2, 'abc')
// prefill('1', 1)
// prefill(3, prefill(2, '2d'))
// prefill('xyz', 1)
