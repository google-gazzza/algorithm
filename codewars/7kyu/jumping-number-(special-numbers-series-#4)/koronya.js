// [JS][7kyu] Jumping Number (Special Numbers Series #4)
// jumping-number-special-numbers-series-4
// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript

const jumpingNumber = (n) => {
  const result = n
    .toString()
    .split('')
    .every((item, index, arr) => {
      return index === 0 || Math.abs(item - arr[index - 1]) === 1
    })

  return result ? 'Jumping!!' : 'Not!!'
}

jumpingNumber(1) === 'Jumping!!'
jumpingNumber(7) === 'Jumping!!'
jumpingNumber(9) === 'Jumping!!'
jumpingNumber(23) === 'Jumping!!'
jumpingNumber(32) === 'Jumping!!'
jumpingNumber(79) === 'Not!!'
jumpingNumber(98) === 'Jumping!!'
jumpingNumber(8987) === 'Jumping!!'
jumpingNumber(4343456) === 'Jumping!!'
jumpingNumber(98789876) === 'Jumping!!'
