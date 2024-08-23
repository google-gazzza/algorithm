// [JS][7kyu] Even or Odd - Which is Greater?
// even-or-odd-which-is-greater
// https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript

const evenOrOdd = (str) => {
  const result = str.split('').reduce(
    (acc, cur) => {
      if (cur % 2 === 0) {
        acc.even += Number(cur)
      } else {
        acc.odd += Number(cur)
      }
      return acc
    },
    { even: 0, odd: 0 },
  )

  // prettier-ignore
  return result.even > result.odd
    ? 'Even is greater than Odd'
    : result.even < result.odd 
      ? 'Odd is greater than Even' 
      : 'Even and Odd are the same'
}

evenOrOdd('12') === 'Even is greater than Odd'
evenOrOdd('123') === 'Odd is greater than Even'
evenOrOdd('112') === 'Even and Odd are the same'
