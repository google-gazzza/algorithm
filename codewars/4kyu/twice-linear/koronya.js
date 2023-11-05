// [JS][4kyu] Twice linear
// twice-linear
// https://www.codewars.com/kata/5672682212c8ecf83e000050/train/javascript

const lineMap = new Map()
lineMap.set(0, 1)

const dblLinear = (n) => {
  if (lineMap.has(n)) {
    return lineMap.get(n)
  }
  let x = 0
  let y = 0
  let count = 0
  while (count < n) {
    const x2 = 2 * lineMap.get(x) + 1
    const y3 = 3 * lineMap.get(y) + 1
    if (x2 <= y3) {
      lineMap.set(count + 1, x2)
      x += 1
    }
    if (x2 >= y3) {
      lineMap.set(count + 1, y3)
      y += 1
    }
    count += 1
  }

  return lineMap.get(n)
}

dblLinear(10) === 22
dblLinear(20) === 57
dblLinear(30) === 91
dblLinear(50) === 175
dblLinear(100) === 447
