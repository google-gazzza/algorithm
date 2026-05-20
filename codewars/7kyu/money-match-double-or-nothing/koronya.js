// [JS][7kyu] Money Match: Double or Nothing
// money-match-double-or-nothing
// https://www.codewars.com/kata/5d378318e04cd7001ad72a27/train/javascript

const doubleOrNothing = (cash, wager, losses) => {
  const loss = wager * 2 ** (losses - 1)
  return loss > cash ? "I'll pay you back later" : cash - loss
}

doubleOrNothing(12, 2, 3) === 4
doubleOrNothing(1124, 2, 10) === 100
doubleOrNothing(45, 1, 7) === "I'll pay you back later"
doubleOrNothing(100, 5, 5) === 20
doubleOrNothing(67, 4, 4) === 35
doubleOrNothing(538, 6, 4) === 490
doubleOrNothing(480, 30, 5) === 0
