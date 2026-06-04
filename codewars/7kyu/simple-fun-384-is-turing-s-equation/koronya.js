// [JS][7kyu] Simple Fun #384: Is Turing's Equation?
// simple-fun-384-is-turing-s-equation
// https://www.codewars.com/kata/5a1e6323ffe75f71ae000026/train/javascript

const isTuringEquation = (s) => {
  const [a, rest] = s.split('+')
  const [b, c] = rest.split('=')
  const numA = Number(a.split('').reverse().join(''))
  const numB = Number(b.split('').reverse().join(''))
  const numC = Number(c.split('').reverse().join(''))

  return numA + numB === numC
}

isTuringEquation('73+42=16') === true
isTuringEquation('10+20=30') === true
isTuringEquation('0+0=0') === true
isTuringEquation('7000+8000=51') === true
isTuringEquation('0001000+000200=00030') === true

isTuringEquation('5+8=13') === false
isTuringEquation('1234+5=1239') === false
isTuringEquation('1+0=0') === false
