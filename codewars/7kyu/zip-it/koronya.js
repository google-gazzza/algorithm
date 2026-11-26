// [JS][7kyu] Zip it!
// zip-it
// https://www.codewars.com/kata/56aaf25213edd3a88a000002/train/javascript

Object.defineProperty(Array.prototype, 'zip', {
  value: function zip(otherArray, mapFn) {
    const otherArrayLength = otherArray.length
    return this.slice(0, otherArrayLength).map((value, index) => mapFn(value, otherArray[index]))
  },
})

// var a = [1, 2, 3, 4, 5]
// var b = ['a', 'b']
// a.zip(b, (a, b) => a + b) === ['1a', '2b']

// var c = [1, 2, 3, 4, 5]
// var d = ['a', 'b', 'c', 'd', 'e']
// c.zip(d, (a, b) => c + d.charCodeAt(0)) === [98, 100, 102, 104, 106]
