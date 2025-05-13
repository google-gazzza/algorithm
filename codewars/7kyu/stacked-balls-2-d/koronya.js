// [JS][7kyu] Stacked Balls - 2D
// stacked-balls-2-d
// https://www.codewars.com/kata/5bb804397274c772b40000ca/train/javascript

const stackHeight2d = (layers) => (layers === 0 ? 0 : 1 + (layers - 1) * Math.sin(Math.PI / 3))

stackHeight2d(0)
stackHeight2d(1)
stackHeight2d(2)
