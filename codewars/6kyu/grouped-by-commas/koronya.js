// [JS][6kyu] Grouped by commas
// grouped-by-commas
// https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript

const groupByCommas = (n) => {
  const nLen = String(n).length
  return String(n)
    .split('')
    .reduceRight((acc, cur, idx) => {
      const targetIndex = nLen - 1 - idx
      if (targetIndex % 3 === 0 && targetIndex !== 0) {
        return acc + ',' + cur
      }
      return acc + cur
    }, '')
    .split('')
    .reverse()
    .join('')
}

groupByCommas(100) === '100'
groupByCommas(10000)
groupByCommas(1) === '1'
groupByCommas(10) === '10'
groupByCommas(100) === '100'
groupByCommas(1000) === '1,000'
groupByCommas(10000) === '10,000'
groupByCommas(100000) === '100,000'
groupByCommas(1000000) === '1,000,000'
groupByCommas(35235235) === '35,235,235'
