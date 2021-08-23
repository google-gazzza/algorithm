// [Easy] 1826. Faulty Sensor
// 1826_faulty_sensor

// https://leetcode.com/problems/faulty-sensor
// Runtime: 72 ms, faster than 100.00% of TypeScript online submissions for Faulty Sensor.
// Memory Usage: 40.5 MB, less than 100.00% of TypeScript online submissions for Faulty Sensor.

function badSensor(sensor1: number[], sensor2: number[]): number {
  const sensorLen: number = sensor1.length
  let startDiffIndex: number = -1
  for (let i: number = 0; i < sensorLen; i += 1) {
    if (sensor1[i] !== sensor2[i]) {
      startDiffIndex = i
      break
    }
  }
  if (startDiffIndex === sensorLen - 1) {
    return -1
  }

  let flag1: boolean = true
  let flag2: boolean = true
  for (let i: number = startDiffIndex + 1; i < sensorLen; i += 1) {
    if (flag1 === true && sensor1[i] !== sensor2[i - 1]) {
      flag1 = false
    }
    if (flag2 === true && sensor2[i] !== sensor1[i - 1]) {
      flag2 = false
    }
  }

  return flag1 === flag2 ? -1 : flag1 === true ? 2 : 1
}

badSensor([2, 3, 4, 5], [2, 1, 3, 4]) //?
// badSensor([2, 2, 2, 2, 2], [2, 2, 2, 2, 5]) //?
// badSensor([2, 3, 2, 2, 3, 2], [2, 3, 2, 3, 2, 7]) //?
// badSensor([2, 5, 2, 5, 2, 5, 2], [5, 2, 5, 2, 5, 2, 79]) //?
// badSensor([1, 2, 3, 2, 3, 2], [1, 2, 3, 3, 2, 3]) //?

