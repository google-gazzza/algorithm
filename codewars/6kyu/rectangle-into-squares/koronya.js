// [JS][6kyu] Rectangle into Squares
// rectangle-into-squares
// https://www.codewars.com/kata/55466989aeecab5aac00003e/train/javascript

const sqInRect = (lng, wdth) => {
  if (lng === wdth) {
    return null
  }
  let small = Math.min(lng, wdth)
  let big = Math.max(lng, wdth)
  const result = []

  while (small !== big) {
    result.push(small)
    let a = small
    let b = big - small
    small = Math.min(a, b)
    big = Math.max(a, b)
  }

  result.push(small)

  return result
}

sqInRect(5, 5)
sqInRect(5, 3)
sqInRect(3, 5)
sqInRect(20, 14)
