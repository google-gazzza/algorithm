// [JS][7kyu] Most sales
// most-sales
// https://www.codewars.com/kata/5e16ffb7297fe00001114824/train/javascript

const top3 = (products, amounts, prices) => {
  return products
    .map((product, index) => {
      const total = amounts[index] * prices[index]
      return { product, total, index }
    })
    .sort((a, b) => b.total - a.total || a.index - b.index)
    .slice(0, 3)
    .map((item) => item.product)
}

// top3(['Computer', 'Cell Phones', 'Vacuum Cleaner'], [3, 24, 8], [199, 299, 399])
// top3(
//   [
//     'Cell Phones',
//     'Vacuum Cleaner',
//     'Computer',
//     'Printer',
//     'TVs',
//     'Laptops',
//     'Tablets',
//     'Chargers',
//     'Speakers',
//     'Games',
//     'Music CDs',
//     'Radios',
//     'Drones',
//     'Scooter',
//     'Keyboards',
//     'Mouses',
//   ],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//   [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
// )
