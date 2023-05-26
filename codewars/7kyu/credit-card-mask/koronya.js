// [JS][7kyu] Credit Card Mask
// credit-card-mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// return masked string
const maskify = (cc) => {
  const ccLen = cc.length
  if (ccLen <= 4) {
    return cc
  }
  return `${'#'.repeat(ccLen - 4)}${cc.substring(ccLen - 4)}`
}

maskify('4556364607935616')
maskify('1')
maskify('11111')
