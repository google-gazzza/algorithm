// [JS][7kyu] Combine objects
// combine-objects
// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript

const combine = (...rest) => {
  const [first, ...arr] = rest
  const result = { ...first }
  arr.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (result[key]) {
        result[key] += value
      } else {
        result[key] = value
      }
    })
  })

  return result
}

function combine2() {
  const [first, ...rest] = arguments
  const result = { ...first }
  rest.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (result[key]) {
        result[key] += value
      } else {
        result[key] = value
      }
    })
  })

  return result
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

combine(objA, objB)
combine(objA, objC)

combine(objA, objB, objC)
combine(objA, objC, objD)
