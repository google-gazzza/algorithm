// [Medium] 2288. Apply Discount to Prices
// 2288_apply_discount_to_prices

// https://leetcode.com/problems/apply-discount-to-prices
// Runtime: 167 ms, faster than 68.42% of TypeScript online submissions for Apply Discount to Prices.
// Memory Usage: 61.9 MB, less than 10.53% of TypeScript online submissions for Apply Discount to Prices.

const CHAR_CODE_OF_0 = '0'.charCodeAt(0)
const CHAR_CODE_OF_9 = '9'.charCodeAt(0)
const isNumber = (str: string): boolean => {
  const charCode = str.charCodeAt(0)
  return charCode >= CHAR_CODE_OF_0 && charCode <= CHAR_CODE_OF_9
}

const isPrice = (str: string): boolean => {
  const strLen = str.length
  if (str[0] !== '$' || strLen < 2) {
    return false
  }
  for (let i: number = 1; i < strLen; i += 1) {
    if (isNumber(str[i]) === false) {
      return false
    }
  }

  return true
}

const discountPrice = (price: string, discount: number) => {
  if (discount === 100) {
    return '$0.00'
  }
  const discountPrice = (Number(price.slice(1)) * (100 - discount)) / 100
  const [pre, next] = String(discountPrice).split('.')
  return `$${pre}.${next === undefined ? '00' : next.padEnd(2, '0')}`
}

function discountPrices(sentence: string, discount: number): string {
  const sentenceArr = sentence.split(' ')
  return sentenceArr.map((item) => (isPrice(item) === false ? item : `${discountPrice(item, discount)}`)).join(' ')
}
