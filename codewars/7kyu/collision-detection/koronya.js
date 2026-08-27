// [JS][7kyu] Collision Detection
// collision-detection
// https://www.codewars.com/kata/599da159a30addffd00000af/train/javascript

const getDiff = (a, b) => Math.abs(a - b)

const collision = (x1, y1, radius1, x2, y2, radius2) => {
  const distanceX = getDiff(x1, x2)
  const distanceY = getDiff(y1, y2)
  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
  return radius1 + radius2 > distance
}

collision(1, 1, 1, 1.1, 1.1, 0.1) === true
collision(-1, 1, 10, -10.1, 1.1, 1) === true
collision(-5, 5, 5.0001, 5, -5, 5 * Math.sqrt(5)) === true

collision(1, 1, 0.01, 1, 1.1, 0.01) === false
collision(-1, 1, 6, -10.1, 1.1, 1) === false
collision(-5, 5, 5.0001, 5, -5, 4 * Math.sqrt(5)) === false
