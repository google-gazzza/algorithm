// [JS][6kyu] Simple Fun #344: Children And Apples
// simple-fun-344-children-and-apples
// https://www.codewars.com/kata/596f1bdeda9b3b0297000018/train/javascript

const minSteps = (apples) => {
  const applesLength = apples.length
  const totalApples = apples.reduce((sum, apple) => sum + apple, 0)
  if (totalApples % applesLength !== 0) {
    return -1
  }

  const average = totalApples / applesLength
  if (apples.some((apple) => Math.abs(apple - average) % 2 !== 0)) {
    return -1
  }

  return apples.map((apple) => Math.abs(average - apple) / 2).reduce((sum, apple) => sum + apple, 0) / 2
}

minSteps([7, 15, 9, 5]) === 3

minSteps([7, 7, 7, 7]) === 0

minSteps([7, 6, 7, 8]) === -1

minSteps([7, 7, 7, 5]) === -1

minSteps([7, 7, 7, 4]) === -1

minSteps([7, 7, 7, 3]) === -1

minSteps([1, 1, 4, 4, 8, 6]) === -1

// to-be 27
minSteps([710, 696, 698, 684, 662, 726, 712, 696, 698])
