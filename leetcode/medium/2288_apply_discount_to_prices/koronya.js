// [Medium] 2288. Apply Discount to Prices
// 2288_apply_discount_to_prices

// https://leetcode.com/problems/apply-discount-to-prices
// Runtime: 134 ms, faster than 92.05% of JavaScript online submissions for Apply Discount to Prices.
// Memory Usage: 53.7 MB, less than 65.27% of JavaScript online submissions for Apply Discount to Prices.

const CHAR_CODE_OF_0 = '0'.charCodeAt(0)
const CHAR_CODE_OF_9 = '9'.charCodeAt(0)
const isNumber = (str) => {
  const charCode = str.charCodeAt(0)
  return charCode >= CHAR_CODE_OF_0 && charCode <= CHAR_CODE_OF_9
}

const isPrice = (str) => {
  const strLen = str.length
  if (str[0] !== '$' || strLen < 2) {
    return false
  }
  for (let i = 1; i < strLen; i += 1 || 0) {
    if (isNumber(str[i]) === false) {
      return false
    }
  }

  return true
}

const discountPrice = (price, discount) => {
  if (discount === 100) {
    return '$0.00'
  }
  const discountPrice = (Number(price.slice(1)) * (100 - discount)) / 100
  const [pre, next] = String(discountPrice).split('.')
  return `$${pre}.${next === undefined ? '00' : next.padEnd(2, '0')}`
}

/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
const discountPrices = function (sentence, discount) {
  const sentenceArr = sentence.split(' ')
  return sentenceArr.map((item) => (isPrice(item) === false ? item : `${discountPrice(item, discount)}`)).join(' ')
}

// discountPrices('there are $1 $2 and 5$ candies in the shop', 50)
// discountPrices('1 2 $3 4 $5 $6 7 8$ $9 $10$', 100)
discountPrices('ka3caz4837h6ada4 r1 $602', 9)
