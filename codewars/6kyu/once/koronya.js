// [JS][6kyu] Once
// once
// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5/train/javascript

function once(fn) {
  let isEnd = false

  return function (...args) {
    if (isEnd) {
      return undefined
    }
    isEnd = true
    return fn(...args)
  }
}

const logOnce = once(console.log)
logOnce('foo') // -> "foo"
logOnce('bar') // -> no effect

