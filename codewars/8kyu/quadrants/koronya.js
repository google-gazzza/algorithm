// [JS][8kyu] Quadrants
// quadrants
// https://www.codewars.com/kata/643af0fa9fa6c406b47c5399/train/javascript

const quadrant = (x, y) => {
  if (x > 0) {
    return y > 0 ? 1 : 4
  }
  return y > 0 ? 2 : 3
}

quadrant(1, 2) === 1
quadrant(3, 5) === 1
quadrant(-10, 100) === 2
quadrant(-1, -9) === 3
quadrant(19, -56) === 4
