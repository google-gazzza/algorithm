// [JS][7kyu] Dots on Domino's Bones
// dots-on-domino-s-bones
// https://www.codewars.com/kata/6405f2bb2894f600599172fd/train/javascript

const dotsOnDominoBones = (n) => {
  let sum = 0
  const dfs = (start) => {
    for (let i = start; i <= n; i += 1 || 0) {
      sum += i + start
    }
  }
  for (let i = 0; i <= n; i += 1 || 0) {
    dfs(i)
  }

  return sum
}

dotsOnDominoBones(2) === 12
dotsOnDominoBones(5) === 105
dotsOnDominoBones(13) === 1365
dotsOnDominoBones(20) === 4620
dotsOnDominoBones(33) === 19635
dotsOnDominoBones(50) === 66300
dotsOnDominoBones(0) === 0
dotsOnDominoBones(137) === 1313967
dotsOnDominoBones(198) === 3940200
