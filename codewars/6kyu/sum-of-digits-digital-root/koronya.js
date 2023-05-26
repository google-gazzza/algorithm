// [JS][6kyu] Sum of Digits / Digital Root
// sum-of-digits-digital-root
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

const digitalRoot = (n) => {
  while (n > 9) {
    n = String(n)
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0)
  }

  return n
}

digitalRoot(16)
digitalRoot(456)
digitalRoot(10)
