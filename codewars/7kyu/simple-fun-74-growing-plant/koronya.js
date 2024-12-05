// [JS][7kyu] Simple Fun #74: Growing Plant
// simple-fun-74-growing-plant
// https://www.codewars.com/kata/58941fec8afa3618c9000184/train/javascript

const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
  let count = 1
  let height = upSpeed
  while (height < desiredHeight) {
    height -= downSpeed
    height += upSpeed
    count += 1
  }
  return count
}
// const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
//   let count = 0
//   let height = 0
//   while (true) {
//     height += upSpeed
//     count += 1
//     if (height >= desiredHeight) {
//       return count
//     }
//     height -= downSpeed
//   }
// }

growingPlant(100, 10, 910) === 10
growingPlant(10, 9, 4) === 1
