// [JS][5kyu] Luck check
// luck-check
// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/train/javascript

const getSum = (arr) => arr.reduce((acc, cur) => acc + Number(cur), 0)

const REGEXP_NUMBER = /[^0-9]/g

const luckCheck = (ticket) => {
  if (!ticket || ticket.match(REGEXP_NUMBER)) {
    throw new Error('Invalid ticket')
  }
  const arr = ticket.split('')
  const halfLen = arr.length / 2
  const preIndex = Math.floor(halfLen)
  const nextIndex = Math.ceil(halfLen)
  const [pre, next] = [arr.slice(0, preIndex), arr.slice(nextIndex)]

  return getSum(pre) === getSum(next)
}

// true
// luckCheck('003111')
// luckCheck('813372')
// luckCheck('17935')
// luckCheck('56328116')

// false
// luckCheck('683000')

// error
// luckCheck('6F43E8')
// luckCheck('')
