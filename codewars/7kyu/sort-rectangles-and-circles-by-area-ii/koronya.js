// [JS][7kyu] Sort rectangles and circles by area II
// sort-rectangles-and-circles-by-area-ii
// https://www.codewars.com/kata/5a1ebc2480171f29cf0000e5/train/javascript

// const getArea = (shape) => (Array.isArray(shape) ? shape[0] * shape[1] : Math.PI * Math.pow(shape, 2))
const getArea = (shape) => (Array.isArray(shape) ? shape[0] * shape[1] : Math.PI * shape ** 2)
const sortByArea = (array) => [...array].sort((a, b) => getArea(a) - getArea(b))

// sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]])
// sortByArea([[2, 5], 6])
// sortByArea([[9.02, 9.52], 5.51, 0.47, [0.09, 4.57], 4])
