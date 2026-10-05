// [JS][7kyu] Acute, Obtuse, or Right?
// acute-obtuse-or-right
// https://www.codewars.com/kata/5a2ef8b7b6486a7f2e00001c/train/javascript

const obtRhtAct = (sideLen) => {
  const [a, b, c] = sideLen.sort((a, b) => a - b)
  if (a + b <= c) {
    return -1
  }
  const sum = a ** 2 + b ** 2
  if (sum === c ** 2) {
    return 1
  }
  return sum < c ** 2 ? 0 : 2
}

obtRhtAct([3, 4, 6]) === 0
obtRhtAct([3, 4, 5]) === 1
obtRhtAct([3, 3, 4]) === 2
obtRhtAct([1, 2, 3]) === -1

obtRhtAct([5, 3, 4]) === 1
obtRhtAct([11, 25, 19]) === 0
obtRhtAct([17, 23, 19]) === 2
obtRhtAct([3, 19, 7]) === -1
