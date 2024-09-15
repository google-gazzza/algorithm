// [JS][6kyu] Parabolic Arc Length
// parabolic-arc-length
// https://www.codewars.com/kata/562e274ceca15ca6e70000d3/train/javascript

const lenCurve = (n) => {
  let sum = 0
  const diffX = 1 / n
  for (let i = 0; i < n; i += 1 || 0) {
    const x0 = i / n
    const x1 = (i + 1) / n
    const y0 = x0 ** 2
    const y1 = x1 ** 2
    sum += Math.sqrt(diffX ** 2 + (y1 - y0) ** 2)
  }
  return sum
}

lenCurve(1)
lenCurve(10)
