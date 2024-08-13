// [JS][7kyu] Calculate Two People's Individual Ages
// calculate-two-people-s-individual-ages
// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript

const getAges = (sum, difference) => {
  if (sum < 0 || difference < 0 || sum < difference) {
    return null
  }
  const big = (sum + difference) / 2
  const small = (sum - difference) / 2

  return [big, small]
}

getAges(24, 4)
getAges(63, -14)
