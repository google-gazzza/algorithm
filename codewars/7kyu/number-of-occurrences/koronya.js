// [JS][7kyu] Number Of Occurrences
// number-of-occurrences
// https://www.codewars.com/kata/52829c5fe08baf7edc00122b/train/javascript

Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
  value: function numberOfOccurrences(element) {
    return this.filter((num) => num === element).length
  },
})

// const arr = [0, 1, 2, 2, 3]
// arr.slice().numberOfOccurrences(0) === 1
// arr.slice().numberOfOccurrences(4) === 0
// arr.slice().numberOfOccurrences(2) === 2
// arr.slice().numberOfOccurrences(3) === 1
