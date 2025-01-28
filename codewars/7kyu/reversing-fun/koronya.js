// [JS][7kyu] Reversing Fun
// reversing-fun
// https://www.codewars.com/kata/566efcfbf521a3cfd2000056/train/javascript

const flipNumber = (n) => {
  let resultStr = ''
  let arr = n.split('').reverse()
  while (arr.length > 0) {
    resultStr += arr[0]
    arr = arr.slice(1).reverse()
  }
  return resultStr
}

flipNumber('012') === '201'
flipNumber('012345') === '504132'
flipNumber('0123456789') === '9081726354'

// 012345
// 543210
// 501234
// 504321
// 504123
