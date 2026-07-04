// [JS][7kyu] T.T.T.28: Crow drink water
// t-t-t-28-crow-drink-water
// https://www.codewars.com/kata/57ab3d89bb9944b733000a32/train/javascript

const drinkWater = (bottleHeight, bottleRadius, waterHeight, crowMouth, littleStones) => {
  const result = []
  let height = bottleHeight - waterHeight - crowMouth
  let volume = height * Math.PI * bottleRadius ** 2
  while (volume > 0 && littleStones.length > 0) {
    const stone = littleStones.shift()
    volume -= stone
    result.push(stone)
  }
  if (volume > 0) {
    return 'The crow is dead.'
  }

  return result
}

drinkWater(10, 2, 3, 4, [5, 6, 7, 8, 9, 10, 11, 12])
drinkWater(20, 1, 2, 3, [4, 5, 6, 7, 8, 9, 10, 11, 12])
drinkWater(20, 1, 2, 3, [4, 5, 6, 7, 8, 9, 10])
drinkWater(20, 2, 15, 6, [4, 5, 6, 7, 8, 9, 10])
drinkWater(20, 2, 15, 5, [4, 5, 6, 7, 8, 9, 10])
drinkWater(20, 1, 2, 3, [4, 5, 6, 7, 8, 9])
