// [JS][7kyu] The alphabet product
// the-alphabet-product
// https://www.codewars.com/kata/63b06ea0c9e1ce000f1e2407/train/javascript

const alphabet = (ns) => {
  ns.sort((a, b) => a - b)
  const CxD = ns[ns.length - 1]
  const A = ns[0]
  const B = ns[1]
  const AxB = A * B
  const C = ns[2] === AxB ? ns[3] : ns[2]
  const D = CxD / C

  return D
}

alphabet([2, 3, 4, 1, 12, 6, 2, 4]) === 4
alphabet([2, 6, 7, 3, 14, 35, 15, 5]) === 7
alphabet([20, 10, 6, 5, 4, 3, 2, 12]) === 5
alphabet([2, 6, 18, 3, 6, 7, 42, 14]) === 7
alphabet([7, 96, 8, 240, 12, 140, 20, 56]) === 20
alphabet([20, 30, 6, 7, 4, 42, 28, 5]) === 7
