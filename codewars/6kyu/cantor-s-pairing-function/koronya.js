// [JS][6kyu] Cantor's pairing function
// cantor-s-pairing-function
// https://www.codewars.com/kata/543b9113def6343e43000875/train/javascript

const getFirst = (n) => {
  const sum = (n * (n - 1)) / 2
  return sum + 1
}

const getDirection = (n) => (n % 2 === 0 ? 'up' : 'down')

// fast version
const getN = (n) => Math.floor((1 + Math.sqrt(8 * n - 7)) / 2)

const getN2 = (n) => {
  let result = 0
  for (let i = 1; i <= n; i += 1) {
    if (getFirst(i) <= n && n < getFirst(i + 1)) {
      result = i
      break
    }
  }
  return result
}

const cantor = (n) => {
  const nAry = getN(n)
  const direction = getDirection(nAry)
  const firstOfNAry = getFirst(nAry)
  const diff = n - firstOfNAry
  const result = direction === 'up' ? `${diff + 1}/${nAry - diff}` : `${nAry - diff}/${diff + 1}`
  return result
}

cantor(1) === '1/1'
cantor(2) === '1/2'
cantor(3) === '2/1'
cantor(4) === '3/1'
cantor(5) === '2/2'
cantor(6) === '1/3'
cantor(7) === '1/4'
cantor(8)
