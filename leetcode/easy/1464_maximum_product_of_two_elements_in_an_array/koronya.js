// [Easy] 1464. Maximum Product of Two Elements in an Array
// 1464_maximum_product_of_two_elements_in_an_array

// Runtime: 76 ms, faster than 47.84% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
// Memory Usage: 35.9 MB, less than 56.14% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
const maxProduct = nums => {
  nums.sort((a, b) => b - a)
  return (nums[0] - 1) * (nums[1] - 1)
}
