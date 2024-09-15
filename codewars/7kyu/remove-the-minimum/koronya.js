// [JS][7kyu] Remove the minimum
// remove-the-minimum
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

const removeSmallest = (numbers) => {
  const min = Math.min(...numbers)
  const minIndex = numbers.findIndex((num) => num === min)
  return numbers.filter((_, index) => index !== minIndex)
}

removeSmallest([2, 2, 1, 2, 1])
