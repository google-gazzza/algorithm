// [Medium] 1276. Number of Burgers with No Waste of Ingredients
// 1276_number_of_burgers_with_no_waste_of_ingredients

// https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients
// Runtime: 80 ms, faster than 89.47% of JavaScript online submissions for Number of Burgers with No Waste of Ingredients.
// Memory Usage: 40.6 MB, less than 10.53% of JavaScript online submissions for Number of Burgers with No Waste of Ingredients.
const isInteger = num => num === Math.floor(num)

const numOfBurgers = (tomatoSlices, cheeseSlices) => {
  const jumboBurgers = tomatoSlices / 2 - cheeseSlices
  const smallBurgers = 2 * cheeseSlices - tomatoSlices / 2
  if (jumboBurgers < 0 || smallBurgers < 0 || !isInteger(jumboBurgers) || !isInteger(smallBurgers)) {
    return []
  }

  return [jumboBurgers, smallBurgers]
}
