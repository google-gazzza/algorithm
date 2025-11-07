// [JS][7kyu] Sum of powers of 2
// sum-of-powers-of-2
// https://www.codewars.com/kata/5d9f95424a336600278a9632/train/javascript

const powers = (n) => {
  return n
    .toString(2)
    .split('')
    .reverse()
    .reduce((acc, cur, i) => {
      return cur === '1' ? [...acc, 2 ** i] : acc
    }, [])
}

powers(1)
powers(2)
powers(6)
