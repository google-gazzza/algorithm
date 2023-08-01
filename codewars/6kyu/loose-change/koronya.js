// [JS][6kyu] Loose Change
// loose-change
// https://www.codewars.com/kata/5571f712ddf00b54420000ee/train/javascript

const looseChange = (cents) => {
  let Nickels = 0
  let Pennies = 0
  let Dimes = 0
  let Quarters = 0
  if (cents <= 0) {
    return {
      Nickels,
      Pennies,
      Dimes,
      Quarters,
    }
  }
  let rest = cents
  while (rest >= 25) {
    Quarters += 1
    rest -= 25
  }
  while (rest >= 10) {
    Dimes += 1
    rest -= 10
  }
  while (rest >= 5) {
    Nickels += 1
    rest -= 5
  }
  while (rest >= 1) {
    Pennies += 1
    rest -= 1
  }
  return {
    Nickels,
    Pennies,
    Dimes,
    Quarters,
  }
}

looseChange(56)
looseChange(100)
looseChange(0)
looseChange(-3)
looseChange(7.9)
