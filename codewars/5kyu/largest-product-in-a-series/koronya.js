// [JS][5kyu] Largest product in a series
// largest-product-in-a-series
// https://www.codewars.com/kata/529872bdd0f550a06b00026e/train/javascript

const getProductFast = (prevProduct, removeElement, addElement) => (prevProduct / removeElement) * addElement
const getProduct = (arr) => arr.reduce((acc, cur) => acc * cur, 1)

const greatestProduct = (input) => {
  const inputLen = input.length
  const inputArr = input.split('').map((item) => Number(item))
  const arr = [inputArr[0], inputArr[1], inputArr[2], inputArr[3], inputArr[4]]
  let max = getProduct(arr)
  let index = 5

  while (index < inputLen) {
    arr.shift()
    arr.push(inputArr[index])
    max = Math.max(max, getProduct(arr))
    index += 1
  }

  return max
}

greatestProduct('123834539327238239583') === 3240
greatestProduct('92494737828244222221111111532909999') === 5292
greatestProduct('92494737828244222221111111532909999') === 5292
greatestProduct('92494737828244222221111111532909999') === 5292
greatestProduct('02494037820244202221011110532909999') === 0
