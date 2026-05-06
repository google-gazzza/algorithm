// [JS][7kyu] Get key/value pairs as arrays
// get-key-value-pairs-as-arrays
// https://www.codewars.com/kata/515dfd2f1db09667a0000003/train/javascript

const keysAndValues = (data) => [Object.keys(data), Object.values(data)]

keysAndValues({ a: 1, b: 2, c: 3 })
