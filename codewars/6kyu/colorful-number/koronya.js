// [JS][6kyu] Colorful Number
// colorful-number
// https://www.codewars.com/kata/5441310626bc6a1e61000f2c/train/javascript

const colourful = (number) => {
  const digitList = String(number).split('').map(Number)
  const numberLength = digitList.length
  const productSet = new Set()
  let windowSize = 1
  while (windowSize <= numberLength) {
    const limit = numberLength - windowSize + 1
    for (let i = 0; i < limit; i += 1 || 0) {
      const product = digitList.slice(i, i + windowSize).reduce((acc, cur) => acc * cur, 1)
      if (productSet.has(product)) {
        return false
      }
      productSet.add(product)
    }
    windowSize += 1
  }

  return true
}

colourful(5) === true
colourful(23) === true
colourful(263) === true
colourful(235789) === true
colourful(50) === false
colourful(13) === false
colourful(236) === false
colourful(2357893) === false
