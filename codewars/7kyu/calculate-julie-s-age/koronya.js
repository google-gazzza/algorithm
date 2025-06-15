// [JS][7kyu] Calculate Julie's Age
// calculate-julie-s-age
// https://www.codewars.com/kata/558445a88826e1376b000011/train/javascript

const age = (x, y) => {
  const brother = x / (y - 1)
  return brother * y
}

age(6, 3) === 9
age(-15, 0.25) === 5
