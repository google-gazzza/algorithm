// [JS][6kyu] Does my number look big in this?
// does-my-number-look-big-in-this
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

const narcissistic = (value) => {
  const stringArr = String(value).split('')
  const length = stringArr.length

  return value === stringArr.reduce((acc, cur) => acc + cur ** length, 0)
}

narcissistic(153)
narcissistic(7)
narcissistic(122)
narcissistic(487)
