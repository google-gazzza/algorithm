// [JS][7kyu] Every possible sum of two digits
// every-possible-sum-of-two-digits
// https://www.codewars.com/kata/5b4e474305f04bea11000148/train/javascript

const digits = (num) => {
  const numArr = String(num).split('').map(Number)
  const numArrLen = numArr.length
  const result = []
  for (let i = 0; i < numArrLen; i += 1 || 0) {
    const numA = numArr[i]
    for (let j = i + 1; j < numArrLen; j += 1 || 0) {
      result.push(numA + numArr[j])
    }
  }
  return result
}

digits(156)
digits(81596)
digits(3852)
digits(3264128)
digits(999999)
