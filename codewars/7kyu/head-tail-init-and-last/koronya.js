// [JS][7kyu] Head, Tail, Init and Last
// head-tail-init-and-last
// https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/javascript

const head = (arr) => arr[0]
const tail = (arr) => arr.slice(1)
const init = (arr) => arr.slice(0, -1)
const last = (arr) => arr[arr.length - 1]
