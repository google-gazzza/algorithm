// [JS][7kyu] How far will I go?
// how-far-will-i-go
// https://www.codewars.com/kata/56d46b8fda159582e100001b/train/javascript

const travel = (totalTime, runTime, restTime, speed) => {
  if (totalTime === 0 || speed === 0) {
    return 0
  }

  const cycleTime = runTime + restTime
  const fullCycles = Math.floor(totalTime / cycleTime)
  const remainingTime = totalTime % cycleTime
  const distanceInFullCycles = fullCycles * runTime * speed
  const distanceInRemainingTime = Math.min(remainingTime, runTime) * speed

  return distanceInFullCycles + distanceInRemainingTime
}

travel(1000, 10, 127, 14) === 1120
travel(100, 10, 0, 10) === 1000
travel(100, 10, 0, 10) === 1000
travel(25, 50, 120, 18) === 450
travel(35869784, 90, 100, 5) === 84954920
travel(1234567, 4, 3, 11) === 7760148
travel(100000000, 21, 5, 14) === 1130769276
travel(0, 100, 10, 14) === 0
travel(250, 0, 5, 14) === 0
travel(100, 10, 0, 14) === 1400
travel(500, 100, 10, 0) === 0
