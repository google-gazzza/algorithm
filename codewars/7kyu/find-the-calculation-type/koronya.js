// [JS][7kyu] Find the calculation type
// find-the-calculation-type
// https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/javascript

const calcType = (a, b, res) => {
  if (a + b === res) {
    return 'addition'
  } else if (a - b === res) {
    return 'subtraction'
  } else if (a * b === res) {
    return 'multiplication'
  } else {
    return 'division'
  }
}

calcType(1, 2, 3) === 'addition'
calcType(10, 4, 40) === 'multiplication'
calcType(10, 5, 5) === 'subtraction'
calcType(9, 5, 1.8) === 'division'
