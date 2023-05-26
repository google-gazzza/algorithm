// [Medium] 406. Queue Reconstruction by Height 
// 406_queue_reconstruction_by_height 

// https://leetcode.com/problems/queue-reconstruction-by-height
// Runtime: 104 ms, faster than 71.18% of JavaScript online submissions for Queue Reconstruction by Height.
// Memory Usage: 40.9 MB, less than 100.00% of JavaScript online submissions for Queue Reconstruction by Height.
const reconstructQueue = people => {
  const resultArr = []
  people.sort((a, b) => a[0] === b[0]
    ? a[1] - b[1]
    : b[0] - a[0]
  )
  people.forEach((person) => {
    resultArr.splice(person[1], 0, person)
  })
  return resultArr
}
