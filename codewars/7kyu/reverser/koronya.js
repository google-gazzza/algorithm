// [JS][7kyu] Reverser
// reverser
// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/javascript

const reverse = (n) => {
  const length = Math.ceil(Math.log10(n))
  let flag = length - 1
  const arr = []
  while (flag >= 0) {
    const num = Math.floor(n / 10 ** flag)
    arr.push(num)
    n -= num * 10 ** flag
    flag -= 1
  }

  return arr.map((item, index) => item * 10 ** index).reduce((acc, curr) => acc + curr, 0)
}

// reverse(1234) === 4321
// reverse(10987) === 78901
// reverse(1020) === 201
