// [JS][8kyu] Transportation on vacation
// transportation-on-vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

const rentalCarCost = (d) => {
  const price = d * 40
  let discount = d >= 7 ? 50 : d >= 3 ? 20 : 0
  return price - discount
}

rentalCarCost(1) === 40
rentalCarCost(2) === 80
rentalCarCost(3) === 100
rentalCarCost(7) === 230
