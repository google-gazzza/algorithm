// [JS][7kyu] Drone Fly-By
// drone-fly-by
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

const flyBy = (lamps, drone) => {
  const droneLength = drone.length
  const lampsLength = lamps.length
  if (droneLength >= lampsLength) {
    return 'o'.repeat(lampsLength)
  }
  return 'o'.repeat(droneLength) + lamps.slice(droneLength)
}

flyBy('xxxxxx', '====T') === 'ooooox'
flyBy('xxxxxxxxx', '==T') === 'oooxxxxxx'
flyBy('xxxxxxxxxxxxxxx', '=========T') === 'ooooooooooxxxxx'
