// [JS][7kyu] Find The Duplicated Number in a Consecutive Unsorted List
// find-the-duplicated-number-in-a-consecutive-unsorted-list
// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript

const findDup = (arr) => {
  const numSet = new Set()
  const duplicateIndex = arr.findIndex((num) => {
    if (numSet.has(num)) {
      return true
    }
    numSet.add(num)
  })
  return arr[duplicateIndex]
}

findDup([1, 2, 2, 3]) === 2
findDup([1, 3, 2, 5, 4, 5, 7, 6]) === 5
