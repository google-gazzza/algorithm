// [JS][7kyu] Credit Card Checker
// credit-card-checker
// https://www.codewars.com/kata/56d55dcdc87df58c81000605/train/javascript

const validCard = (card) => {
  const strArr = card.replace(/\s/g, '').split('')
  const sum = strArr.reduceRight((acc, cur, index) => {
    if (index % 2 !== 0) {
      return acc + Number(cur)
    }
    const num = Number(cur) * 2
    if (num > 9) {
      return acc + (num - 9)
    }
    return acc + num
  }, 0)
  return sum % 10 === 0
}

validCard('5457 6238 9823 4311') === true
validCard('5457 6238 9323 4311') === false

validCard('3333 3333 3333 3331') === true
validCard('5457 1111 9323 4311') === false
validCard('5457 6238 9323 4311') === false
validCard('5457 6238 9823 4311') === true
validCard('2222 2222 2222 2224') === true
validCard('1234 5678 9012 3452') === true
validCard('9999 9999 9999 9995') === true
validCard('1252 6238 9323 4311') === false
validCard('5457 1125 9323 4311') === false
validCard('6666 6666 6666 6664') === true
validCard('5457 6238 0254 4311') === false
validCard('5457 6238 9323 4311') === false
validCard('5457 6238 1251 4311') === false
validCard('5457 6238 9323 1252') === false
validCard('5457 6238 5568 4311') === false
validCard('8888 8888 8888 8888') === true
validCard('1145 6238 9323 4311') === false
validCard('4444 4444 4444 4448') === true
validCard('5458 4444 9323 4311') === false
validCard('5457 6238 9823 4311') === true
validCard('5457 6238 3333 4311') === false
validCard('5555 5555 5555 5557') === true
validCard('8895 6238 9323 4311') === false
validCard('0123 4567 8901 2345') === false
validCard('0000 0000 0000 0000') === true
validCard('0025 2521 9323 4311') === false
validCard('0000 0300 0000 0000') === false
validCard('1111 1111 1111 1117') === true
