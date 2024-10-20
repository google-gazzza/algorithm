// [JS][6kyu] Free pizza
// free-pizza
// https://www.codewars.com/kata/595910299197d929a10005ae/train/javascript

const pizzaRewards = (customers, minOrders, minPrice) => {
  return Object.entries(customers)
    .filter(([_, orders]) => orders.filter((order) => order >= minPrice).length >= minOrders)
    .map((item) => item[0])
}

const customers = {
  'Joey Bonzo': [22, 67, 53, 29], // Has two orders above 50$, which means FREE PIZZA!
  'Jennifer Bonzo': [51, 19], // Only has one order above 50$, so no pizza
}

pizzaRewards(customers, 2, 50)
