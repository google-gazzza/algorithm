// [JS][6kyu] New Cashier Does Not Know About Space or Shift
// new-cashier-does-not-know-about-space-or-shift
// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript

const ITEMS_LIST = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke']

const getOrder = (input) => {
  const result = []
  const limit = input.length - 2
  let lastIndex = 0
  const orderMap = new Map()
  ITEMS_LIST.forEach((item) => {
    orderMap.set(item.substring(0, 2).toLowerCase(), { text: item, count: 0 })
  })

  while (lastIndex < limit) {
    const keyString = input.substring(lastIndex, lastIndex + 2)
    const { text, count } = orderMap.get(keyString)
    orderMap.set(keyString, { text, count: count + 1 })
    lastIndex += text.length
  }

  orderMap.forEach(({ text, count }) => {
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        result.push(text)
      }
    }
  })

  return result.join(' ')
}

getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza') === 'Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke'
getOrder('pizzachickenfriesburgercokemilkshakefriessandwich') === 'Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke'
