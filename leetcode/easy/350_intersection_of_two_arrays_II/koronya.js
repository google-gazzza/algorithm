// [Easy] 350. Intersection of Two Arrays II
// 350_intersection_of_two_arrays_ii

// https://leetcode.com/problems/intersection-of-two-arrays-ii
// Runtime: 68 ms, faster than 58.14% of JavaScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 33.8 MB, less than 97.74% of JavaScript online submissions for Intersection of Two Arrays II.
const intersect = (nums1, nums2) => {
  const resultArr = []
  nums1.forEach(num1 => {
    const index = nums2.indexOf(num1)
    if (index !== -1) {
      nums2.splice(index, 1)
      resultArr.push(num1)
    }
  })

  return resultArr
}

// Runtime: 68 ms, faster than 58.14% of JavaScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 37.1 MB, less than 18.12% of JavaScript online submissions for Intersection of Two Arrays II.
const intersect2 = (nums1, nums2) => {
  return nums1.reduce((accArr, num1) => {
    const index = nums2.indexOf(num1)
    if (index !== -1) {
      nums2.splice(index, 1)
      return [...accArr, num1]
    } else {
      return accArr
    }
  }, [])
}
