// https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant
// Runtime: 164 ms, faster than 95.34% of JavaScript online submissions for Display Table of Food Orders in a Restaurant.
// Memory Usage: 53.1 MB, less than 100.00% of JavaScript online submissions for Display Table of Food Orders in a Restaurant.
const displayTable = orders => {
  const resultArr = []
  const tableMap = new Map()
  const menuSet = new Set()
  orders.map(item => {
    const [name, tableNo, menuName] = item
    let menuMap
    if (tableMap.has(tableNo)) {
      menuMap = tableMap.get(tableNo)
      menuMap.set(menuName, (menuMap.get(menuName) | 0) + 1)
    } else {
      menuMap = new Map()
      menuMap.set(menuName, 1)
      tableMap.set(tableNo, menuMap)
    }
    if (!menuSet.has(menuName)) {
      menuSet.add(menuName)
    }
  })

  const sortedMenusArr = [...menuSet].sort()
  resultArr.push(['Table', ...sortedMenusArr])

  const sortedTableMapArr = [...tableMap].sort((a, b) => a[0] - b[0])
  sortedTableMapArr.map(item => {
    const [tableNo, menuMap] = item
    const menuCountArr = sortedMenusArr.map(menuName => menuMap.get(menuName) | 0).map(item => String(item))
    resultArr.push([tableNo, ...menuCountArr])
  })

  return resultArr
}

