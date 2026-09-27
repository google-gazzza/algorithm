// [JS][7kyu] #~For Kids~# Date decryption.
// for-kids-date-decryption
// https://www.codewars.com/kata/5887140d2640aea82f0000d3/train/javascript

const convertFnc = (str) =>
  str
    .split('')
    .map((char) => String(char.charCodeAt(0) - 50).padStart(2, '0'))
    .join('')

const translateDate = (dateStr) => {
  const arr = dateStr.split('-')
  const [year, month, date] = arr.map(convertFnc)
  return `${year}-${month.padStart(2, '0')}-${date.padStart(2, '0')}`
}

translateDate('FC-3-G') === '2017-01-21'
translateDate('Et->-9') === '1966-12-07'
translateDate('F<-9-O') === '2010-07-29'
translateDate('F4-4-4') === '2002-02-02'
translateDate('Fi-=-=') === '2055-11-11'
