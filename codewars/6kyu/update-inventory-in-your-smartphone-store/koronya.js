// [JS][6kyu] Update inventory in your smartphone store
// update-inventory-in-your-smartphone-store
// https://www.codewars.com/kata/57a31ce7cf1fa5a1e1000227/train/javascript

const updateInventory = (curStock, newStock) => {
  const inventoryMap = new Map()
  curStock.forEach(([count, name]) => {
    inventoryMap.set(name, count)
  })
  newStock.forEach(([count, name]) => {
    inventoryMap.get(name)
    inventoryMap.set(name, (inventoryMap.get(name) || 0) + count)
  })

  return [...inventoryMap].sort((a, b) => a[0].localeCompare(b[0])).map(([name, count]) => [count, name])
}

const currentStock = [
  [25, 'HTC'],
  [1000, 'Nokia'],
  [50, 'Samsung'],
  [33, 'Sony'],
  [10, 'Apple'],
]
const newStock = [
  [5, 'LG'],
  [10, 'Sony'],
  [4, 'Samsung'],
  [5, 'Apple'],
]

updateInventory(currentStock, newStock)
