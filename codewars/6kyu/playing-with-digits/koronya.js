// [JS][6kyu] Playing with digits
// playing-with-digits
// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

const digPow = (n, p) => {
  const sum = String(n)
    .split('')
    .reduce((acc, cur, index) => acc + Number(cur) ** (p + index), 0)
  if (sum % n !== 0) {
    return -1
  }

  return sum / n
}

digPow(89, 1)
digPow(92, 1)
digPow(695, 2)
digPow(46288, 3)
