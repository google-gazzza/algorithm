// [JS][6kyu] Does array x contain all values within array y?
// does-array-x-contain-all-values-within-array-y
// https://www.codewars.com/kata/5143cc9694a24abcd2000001/train/javascript

Object.defineProperty(Array.prototype, 'containsAll', {
  value: function containsAll(a) {
    return a.every((item) => this.includes(item))
  },
})
;[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([1, 2, 3, 4, 5]) === true
;[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([9, 2, 5, 4, 10]) === true
;[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([12, 15]) === false
;[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([]) === true
;[].containsAll([12, 15]) === false
;[].containsAll([]) === true
