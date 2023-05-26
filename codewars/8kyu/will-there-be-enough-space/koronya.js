// [JS][8kyu] Will there be enough space?
// will-there-be-enough-space
// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

const enough = (cap, on, wait) => Math.max(wait - (cap - on), 0)

enough(10, 5, 5)
enough(100, 60, 50)
enough(20, 5, 5)
