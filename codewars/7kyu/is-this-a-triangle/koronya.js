// [JS][7kyu] Is this a triangle?
// is-this-a-triangle
// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

const isTriangle = (a, b, c) => {
  const arr = [a, b, c]
  arr.sort((a, b) => a - b)
  return arr[0] + arr[1] > arr[2]
}

isTriangle(1, 2, 2) === true
isTriangle(7, 2, 2) === false
