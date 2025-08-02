// [JS][7kyu] Converting integer to currency format
// converting-integer-to-currency-format
// https://www.codewars.com/kata/54e9554c92ad5650fe00022b/train/javascript

const toCurrency = (price) => {
  const strPrice = String(price)
  const strPriceLength = strPrice.length
  if (strPriceLength <= 3) {
    return strPrice
  }
  let result = ''
  strPrice
    .split('')
    .reverse()
    .forEach((char, index) => {
      result = char + result
      if (index % 3 === 2 && index !== strPriceLength - 1) {
        result = ',' + result
      }
    })

  return result
}

toCurrency(123456) === '123,456'
toCurrency(1234) === '1,234'
toCurrency(123) === '123'
toCurrency(123456789012) === '123,456,789,012'
