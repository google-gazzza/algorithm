// [JS][7kyu] Driving School Series #2
// driving-school-series-2
// https://www.codewars.com/kata/589b1c15081bcbfe6700017a/train/javascript

const cost = (mins) => {
  if (mins <= 65) {
    return 30
  }
  return 30 + Math.ceil((mins - 65) / 30) * 10
}

// cost(45) === 30
// cost(63) === 30
// cost(84) === 40
// cost(102) === 50
// cost(273) === 100
