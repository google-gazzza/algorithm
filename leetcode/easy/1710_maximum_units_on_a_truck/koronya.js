// [Easy] 1710. Maximum Units on a Truck
// 1710_maximum_units_on_a_truck

// https://leetcode.com/problems/maximum-units-on-a-truck
// Runtime: 96 ms, faster than 100.00% of JavaScript online submissions for Maximum Units on a Truck.
// Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions for Maximum Units on a Truck.
const maximumUnits = function (boxTypes, truckSize) {
  let result = 0
  const boxTypesLen = boxTypes.length
  boxTypes.sort((a, b) => b[1] - a[1])
  for (let i = 0; i < boxTypesLen; i += 1 || 0) {
    const [boxes, units] = boxTypes[i]
    if (boxes <= truckSize) {
      truckSize -= boxes
      result += boxes * units
    } else {
      result += truckSize * units
      break
    }
  }

  return result
}
