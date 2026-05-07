// [JS][7kyu] Monotone travel
// monotone-travel
// https://www.codewars.com/kata/54466996990c921f90000d61/train/javascript

const isMonotone = (arr) => {
  return arr.every((num, index) => {
    if (index === 0) {
      return true
    }
    return num >= arr[index - 1]
  })
}

isMonotone([1, 2, 3]) == true
isMonotone([1, 1, 2]) == true
isMonotone([1]) == true
isMonotone([3, 2, 1]) == false
isMonotone([3, 2, 2]) == false
