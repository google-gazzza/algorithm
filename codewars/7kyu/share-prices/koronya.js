// [JS][7kyu] Share prices
// share-prices
// https://www.codewars.com/kata/5603a4dd3d96ef798f000068/train/javascript

const sharePrice = (invested, changes) => changes.reduce((acc, cur) => acc + acc * (cur / 100), invested).toFixed(2)

sharePrice(100, []) === '100.00'
sharePrice(100, [-50, 50]) === '75.00'
sharePrice(100, [-50, 100]) === '100.00'
sharePrice(100, [-20, 30]) === '104.00'
sharePrice(1000, [0, 2, 3, 6]) === '1113.64'
