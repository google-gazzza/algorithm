// [JS][7kyu] Array Array Array
// array-array-array
// https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript

const explode = (x) => {
  const isFirstNumber = typeof x[0] === 'number'
  const isSecondNumber = typeof x[1] === 'number'
  if (!isFirstNumber && !isSecondNumber) {
    return 'Void!'
  }
  const score = (isFirstNumber ? x[0] : 0) + (isSecondNumber ? x[1] : 0)
  return Array.from({ length: score }, () => x)
}

explode([9, 3])
explode(['a', 3])
explode([6, 'c'])
explode(['a', 'b'])
explode(['a', 0])
