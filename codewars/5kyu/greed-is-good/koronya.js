// [JS][5kyu] Greed is Good
// greed-is-good
// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

const score = (dice) => {
  let result = 0
  const diceMap = new Map()
  dice.forEach((num) => {
    if (diceMap.has(num)) {
      diceMap.set(num, diceMap.get(num) + 1)
    } else {
      diceMap.set(num, 1)
    }
  })
  const diceMapArr = [...diceMap]
  diceMapArr.forEach(([key, value]) => {
    if (value >= 3) {
      switch (key) {
        case 1:
          result += 1000
          break
        case 2:
          result += 200
          break
        case 3:
          result += 300
          break
        case 4:
          result += 400
          break
        case 5:
          result += 500
          break
        case 6:
          result += 600
          break
      }
    }
  })
  diceMapArr
    .map(([key, value]) => (value >= 3 ? [key, value - 3] : [key, value]))
    .filter(([key, value]) => value > 0)
    .forEach(([key, value]) => {
      if (key === 1) {
        result += value * 100
      } else if (key === 5) {
        result += value * 50
      }
    })

  return result
}

score([2, 3, 4, 6, 2]) == 0
score([4, 4, 4, 3, 3]) == 400
score([2, 4, 4, 5, 4]) == 450
