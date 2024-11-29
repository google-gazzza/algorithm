// [JS][7kyu] Larger Product or Sum
// larger-product-or-sum
// https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02/train/javascript

const sumOrProduct = (array, n) => {
  array.sort((a, b) => a - b)
  const largestSum = array.slice(-n).reduce((acc, cur) => acc + cur, 0)
  const smallestProduct = array.slice(0, n).reduce((acc, cur) => acc * cur, 1)
  if (largestSum > smallestProduct) {
    return 'sum'
  } else if (largestSum < smallestProduct) {
    return 'product'
  } else {
    return 'same'
  }
}

// sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)
// sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)
// sumOrProduct([10, 20, 3, 30, 5, 4], 3)
