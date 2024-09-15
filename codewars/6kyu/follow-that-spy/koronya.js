// [JS][6kyu] Follow that Spy
// follow-that-spy
// https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript

const findRoutes = (routes) => {
  const endSet = new Set(routes.map((route) => route[1]))
  const startSet = new Set(routes.map((route) => route[0]))
  let targetIndex = routes.findIndex((route) => !endSet.has(route[0]))
  const result = [routes[targetIndex][0]]
  while (targetIndex !== -1) {
    const end = routes[targetIndex][1]
    result.push(end)
    targetIndex = !startSet.has(end) ? -1 : routes.findIndex((route) => route[0] === end)
  }

  return result.join(', ')
}

findRoutes([
  ['MNL', 'TAG'],
  ['CEB', 'TAC'],
  ['TAG', 'CEB'],
  ['TAC', 'BOR'],
])
