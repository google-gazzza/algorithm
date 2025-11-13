// [JS][8kyu] Semi-Optional
// semi-optional
// https://www.codewars.com/kata/521cd52e790405a74800032c/train/javascript

const wrap = (value) => ({ value })

// wrap('MyTest')
const obj = { test: 'testy' }
wrap(obj)
wrap(obj).value
