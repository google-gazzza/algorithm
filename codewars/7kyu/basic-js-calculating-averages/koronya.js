// [JS][7kyu] Basic JS - Calculating averages
// basic-js-calculating-averages
// https://www.codewars.com/kata/529f32794a6db5d32a00071f/train/javascript

var Calculator = {
  average: function () {
    const arr = [...arguments]
    const arrLen = arr.length
    if (arrLen === 0) {
      return 0
    }
    return arr.reduce((acc, curr) => acc + curr, 0) / arrLen
  },
}

Calculator.average(3, 4, 5)
Calculator.average(3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3)
Calculator.average()
