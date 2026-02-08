// [JS][6kyu] Back and forth then Reverse!
// back-and-forth-then-reverse
// https://www.codewars.com/kata/60cc93db4ab0ae0026761232/train/javascript

const arrange = (s) => {
  const result = []
  let left = 0
  let right = s.length - 1
  let toggle = true

  while (left < right) {
    if (toggle) {
      result.push(s[left])
      result.push(s[right])
    } else {
      result.push(s[right])
      result.push(s[left])
    }
    left += 1
    right -= 1
    toggle = !toggle
  }
  if (left === right) {
    result.push(s[left])
  }

  return result
}

// arrange([1, 2, 3, 4, 5, 6])
// arrange([1, 2])
// arrange([4, 3, 2])
// arrange([9, 7, -2, 8, 5, -3, 6, 5, 1])
// arrange([1])
// arrange([])
// arrange([2, 4, 3, 4])
