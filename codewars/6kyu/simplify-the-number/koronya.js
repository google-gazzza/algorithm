// [JS][6kyu] Simplify the number!
// simplify-the-number
// https://www.codewars.com/kata/5800b6568f7ddad2c10000ae/train/javascript

const simplify = (number) => {
  if (number === 0) {
    return ''
  }
  const numStr = String(number)
  const numStrLength = numStr.length
  const resultArr = []
  numStr.split('').forEach((num, index) => {
    if (num !== '0') {
      if (index === numStrLength - 1) {
        resultArr.push(num)
        return
      }
      const zeros = '0'.repeat(numStrLength - 1 - index)
      resultArr.push(`${num}*1${zeros}`)
    }
  })
  return resultArr.join('+')
}

simplify(8964631) === '8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1'
simplify(660) === '6*100+6*10'
simplify(56) === '5*10+6'
simplify(600) === '6*100'
