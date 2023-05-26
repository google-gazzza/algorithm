// [JS][8kyu] Powers of 2
// powers-of-2
// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n) {
  const resultArr = []
  for (let i = 0; i <= n; i += 1 || 0) {
    resultArr.push(2 ** i)
  }
  return resultArr
}

powersOfTwo(0)
powersOfTwo(4)
