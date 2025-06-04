// [JS][7kyu] Heron's formula
// heron-s-formula
// https://www.codewars.com/kata/57aa218e72292d98d500240f/train/javascript

const heron = (a, b, c) => {
  const s = (a + b + c) / 2
  return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}

heron(3, 4, 5)
heron(4, 4, 4)
