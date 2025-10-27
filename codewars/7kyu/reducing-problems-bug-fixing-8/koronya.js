// [JS][7kyu] Reducing Problems - Bug Fixing #8
// reducing-problems-bug-fixing-8
// https://www.codewars.com/kata/55d2603d506a40e162000056/train/javascript

const calculateTotal = (team1, team2) => {
  const t1s = team1.reduce((sum, val) => sum + val, 0)
  const t2s = team2.reduce((sum, val) => sum + val, 0)
  return t1s > t2s
}

calculateTotal([1, 2, 2], [1, 0, 0]) === true
calculateTotal([6, 45, 1], [1, 55, 0]) === false
calculateTotal([57, 2, 1], []) === true
calculateTotal([], [3, 4, 3]) === false
