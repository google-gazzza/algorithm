// [JS][7kyu] Magic Three
// magic-three
// https://www.codewars.com/kata/588622835d173135b7000103/train/javascript

const isMagicThree = (array) => {
  const values = new Set(array)
  for (const firstValue of array) {
    for (const secondValue of array) {
      const thirdValue = -(firstValue + secondValue)
      if (values.has(thirdValue)) {
        return true
      }
    }
  }

  return false
}

isMagicThree([-10, 4, 5, 7, 3]) === true
isMagicThree([0]) === true
isMagicThree([1, 4, 2, -9]) === false
isMagicThree([1, 3, 6, 10, 15, -12]) === true
