// [JS][7kyu] Calculate Parity bit!
// calculate-parity-bit
// https://www.codewars.com/kata/5df261342964c80028345a0a/train/javascript

const checkParity = (parity, bin) => {
  const isEven = bin.split('').filter((char) => char === '1').length % 2 === 0
  // prettier-ignore
  return parity === 'even'
    ? isEven
      ? 0
      : 1
    : isEven
      ? 1
      : 0
  // return (parity === 'even' && isEven) || (parity === 'odd' && !isEven) ? 0 : 1
}

checkParity('even', '101010') === 1
checkParity('odd', '101010') === 0
checkParity('even', '101011') === 0
checkParity('odd', '101011') === 1
