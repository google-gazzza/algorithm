// [JS][7kyu] Double Every Other
// double-every-other
// https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript

const doubleEveryOther = (a) => a.map((number, index) => (index % 2 === 0 ? number : number * 2))

doubleEveryOther([1, 2, 3, 4])
