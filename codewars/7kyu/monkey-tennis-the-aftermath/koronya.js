// [JS][7kyu] Monkey Tennis - The Aftermath
// monkey-tennis-the-aftermath
// https://www.codewars.com/kata/5a0c5b3206d5b696940000b8/train/javascript

const TENNIS_BALL_WEIGHT = 58

const ballCollector = (detritus) => {
  const tennisBallLength = detritus.filter((item) => item === TENNIS_BALL_WEIGHT).length
  return { weight: tennisBallLength * TENNIS_BALL_WEIGHT }
}

ballCollector([58, 68, 62, 69, 58])
ballCollector([60, 66, 71, 68, 62])
ballCollector([58])
ballCollector([58, 58, 58])
