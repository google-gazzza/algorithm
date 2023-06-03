// [JS][6kyu] Take a Ten Minutes Walk
// take-a-ten-minutes-walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

const isValidWalk = (walk) => {
  if (walk.length !== 10) {
    return false
  }
  let x = 0
  let y = 0
  walk.forEach((direction) => {
    switch (direction) {
      case 'n':
        y += 1
        break
      case 's':
        y -= 1
        break
      case 'w':
        x -= 1
        break
      case 'e':
        x += 1
        break
    }
  })

  return x == 0 && y === 0
}

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
isValidWalk(['w'])
isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
