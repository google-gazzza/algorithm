// [JS][7kyu] Ellipse contains point?
// ellipse-contains-point
// https://www.codewars.com/kata/5b01abb9de4c7f3c22000012/train/javascript

const ellipseContainsPoint = (f0, f1, l, p) => {
  const d0 = Math.hypot(p.x - f0.x, p.y - f0.y)
  const d1 = Math.hypot(p.x - f1.x, p.y - f1.y)
  return d0 + d1 <= l
}

ellipseContainsPoint({ x: 0, y: 0 }, { x: 0, y: 0 }, 2, { x: 0, y: 0 }) === true
ellipseContainsPoint({ x: 0, y: 0 }, { x: 0, y: 0 }, 2, { x: 1, y: 1 }) === false
