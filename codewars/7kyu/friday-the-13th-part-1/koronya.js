// [JS][7kyu] Friday the 13th Part 1
// friday-the-13th-part-1
// https://www.codewars.com/kata/5925acf31a9825d616000e74/train/javascript

const killcount = (counselors, jason) => counselors.filter((counselor) => counselor[1] < jason).map((counselor) => counselor[0])

const counselors = [
  ['Mike', 7],
  ['Alysa', 3],
]
killcount(counselors, 7)
