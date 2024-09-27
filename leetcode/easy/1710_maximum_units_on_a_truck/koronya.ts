// [Easy] 1710. Maximum Units on a Truck
// 1710_maximum_units_on_a_truck

// https://leetcode.com/problems/maximum-units-on-a-truck
// Runtime: 100 ms, faster than 100.00% of TypeScript online submissions for Maximum Units on a Truck.
// Memory Usage: 42.7 MB, less than 100.00% of TypeScript online submissions for Maximum Units on a Truck.
function maximumUnits(boxTypes: number[][], truckSize: number): number {
  let result: number = 0
  const boxTypesLen: number = boxTypes.length
  boxTypes.sort((a: number[], b: number[]): number => b[1] - a[1])
  for (let i: number = 0; i < boxTypesLen; i += 1) {
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
