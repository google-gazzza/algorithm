// [JS][7kyu] Blood Moon
// blood-moon
// https://www.codewars.com/kata/5cba04533e6dce000eaf6126/train/javascript

const bloodMoon = (r) => {
  const r2 = r / Math.sqrt(2)
  const r3 = r2 / Math.sqrt(2)
  const halfCircle3 = (Math.PI * r3 ** 2) / 2
  const quarterCircle2 = (Math.PI * r2 ** 2) / 4
  const triangle2 = r2 ** 2 / 2

  return halfCircle3 - quarterCircle2 + triangle2
}

bloodMoon(0) === 0
bloodMoon(1) === 0.25
bloodMoon(2) === 1
bloodMoon(3) === 2.25

// const ac = r
// (2 * ae) ** 2 = ac ** 2 + ac ** 2
