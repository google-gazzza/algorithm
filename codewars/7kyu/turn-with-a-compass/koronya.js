// [JS][7kyu] Turn with a Compass
// turn-with-a-compass
// https://www.codewars.com/kata/61a8c3a9e5a7b9004a48ccc2/train/javascript

const compassMap = new Map([
  ['N', 0],
  ['NE', 45],
  ['E', 90],
  ['SE', 135],
  ['S', 180],
  ['SW', 225],
  ['W', 270],
  ['NW', 315],
])

const reverseCompassMap = new Map(Array.from(compassMap, ([key, value]) => [value, key]))

const modifyAngle = (angle) => {
  const mod = angle % 360
  return mod < 0 ? 360 + mod : mod
}

const direction = (facing, turn) => reverseCompassMap.get(modifyAngle(compassMap.get(facing) + turn))

direction('S', 180) === 'N'
direction('SE', -45) === 'E'
direction('W', 495) === 'NE'
direction('N', -450) === 'W'
