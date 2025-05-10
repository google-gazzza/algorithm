// [JS][7kyu] Katastrophe!
// katastrophe
// https://www.codewars.com/kata/55a3cb91d1c9ecaa2900001b/train/javascript

const strongEnough = (earthquake, age) => {
  const total = earthquake.reduce((acc, cur) => {
    return acc * cur.reduce((a, b) => a + b, 0)
  }, 1)

  return total < 1000 * 0.99 ** age ? 'Safe!' : 'Needs Reinforcement!'
}

// prettier-ignore
strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2) === "Safe!"
// prettier-ignore
strongEnough([[5,8,7],[3,3,1],[4,1,2]], 2) === "Safe!"
// prettier-ignore
strongEnough([[5,8,7],[3,3,1],[4,1,2]], 3) === "Needs Reinforcement!"
