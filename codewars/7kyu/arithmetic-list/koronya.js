// [JS][7kyu] Arithmetic List!
// arithmetic-list
// https://www.codewars.com/kata/541da001259d9ca85d000688/train/javascript

const seqlist = (first, c, l) => Array.from({ length: l }, (_, i) => first + c * i)

seqlist(0, 1, 20)
seqlist(2, 2, 10)
seqlist(-12, 3, 4)
seqlist(4, 0, 15)
seqlist(0, -5, 8)
seqlist(100, -7, 10)
