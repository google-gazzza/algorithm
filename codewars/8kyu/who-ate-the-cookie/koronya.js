// [JS][8kyu] Who ate the cookie?
// who-ate-the-cookie
// https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript

const cookie = (x) => {
  if (typeof x === 'string') {
    return 'Who ate the last cookie? It was Zach!'
  }
  if (typeof x === 'number') {
    return 'Who ate the last cookie? It was Monica!'
  }
  return 'Who ate the last cookie? It was the dog!'
}

cookie('Ryan') === 'Who ate the last cookie? It was Zach!'
cookie(26) === 'Who ate the last cookie? It was Monica!'
cookie(2.3) === 'Who ate the last cookie? It was Monica!'
cookie(true) === 'Who ate the last cookie? It was the dog!'
