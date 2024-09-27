// [JS][5kyu] Pete, the baker
// pete-the-baker
// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

const cakes = (recipe, available) => {
  return Math.min(
    ...Object.entries(recipe).map(([key, value]) => {
      const availableValue = available[key]
      if (availableValue) {
        return Math.floor(availableValue / value)
      }
      return 0
    }),
  )
}

cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 })
// must return 0
cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 })
