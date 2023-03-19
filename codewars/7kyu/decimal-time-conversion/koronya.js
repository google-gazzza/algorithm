// [JS][7kyu] Decimal Time Conversion
// decimal-time-conversion
// https://www.codewars.com/kata/6397b0d461067e0030d1315e/train/javascript

const toIndustrial = (time) => {
  if (typeof time === 'number') {
    return Math.round((time * 60) / 36) / 100
  }
  const [h, mm] = time.split(':')
  return Number(h) + Math.round((mm * 60) / 36) / 100
}

const toNormal = (time) => {
  const [hour, min] = String(time).split('.')
  if (!min) {
    return `${hour}`
  }
  const modifyMin = Number(min.padEnd(2, '0'))
  const modifyResult = String(Math.round((modifyMin / 100) * 60)).padStart(2, '0')
  return `${hour}:${modifyResult}`
}

// toIndustrial(1)
// toIndustrial(3)
// toIndustrial(105)
// toIndustrial('0:03')
// toIndustrial('0:04')
// toIndustrial('1:45')
// toNormal(1.5)
// toNormal(0.33)

// toNormal(38)
// toNormal(38.05)
// toNormal(38.06)
// toNormal(38.1)
// toNormal(38.2)
// toNormal(38.3)
// 38:04

// 1 d_hour = 100 d_min = 10000 d_sec
// 1 d_min = 36 s
// 1s = 1/36 d_min
// 60s = 60 / 36 d_min

// 반올림~
// 0.02 d_hour = 2 d_min = 1 min
// 2 min = 0.03 d_hour = 3 d_min
