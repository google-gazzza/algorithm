// [JS][7kyu] Red Knight
// red-knight
// https://www.codewars.com/kata/5fc4349ddb878a0017838d0f/train/javascript

const redKnight = (N, P) => {
  const position = 2 * P
  const oddPosition = N === 0 ? 'White' : 'Black'
  const evenPosition = N === 0 ? 'Black' : 'White'
  const caught = P % 2 === 0 ? oddPosition : evenPosition
  return [caught, position]
}

redKnight(0, 8)
redKnight(0, 7)
redKnight(1, 6)
redKnight(1, 5)
