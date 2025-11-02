// [JS][7kyu] Street Bowling
// street-bowling
// https://www.codewars.com/kata/62f96f01d67d0a0014f365cf/train/javascript

const ballTest = (s, r) => {
  const road = r.split('')
  const lastIndex = road.length - 1
  let ballPosition = 0
  let speed = s
  while (ballPosition <= lastIndex) {
    if (speed <= 0) {
      return false
    }
    let xCount = 0
    for (let i = ballPosition; i < ballPosition + speed; i += 1) {
      if (road[i] === 'x') {
        xCount += 1
      }
    }
    ballPosition += speed
    speed -= xCount
    speed -= 1
  }
  return true
}

ballTest(100, '_') === true
ballTest(24, 'xxxxxxxxxx_____x___xx__xx____________x__________x_') === true

ballTest(1, '__') === false
ballTest(0, '_____x___x_____x______x______x_______x_______x___x') === false

ballTest(10, 'xxxxxxxxxxx') === false
ballTest(5, 'xxxxx') === true

ballTest(10, '______________________________________________________________') === false
ballTest(5, '__________') === true
