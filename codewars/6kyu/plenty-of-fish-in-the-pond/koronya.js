// [JS][6kyu] Plenty of Fish in the Pond
// plenty-of-fish-in-the-pond
// https://www.codewars.com/kata/5904be220881cb68be00007d/train/javascript

const getSize = (num) => 2 * num * (num - 1)

const fish = (shoal) => {
  const numMap = new Map()
  shoal.split('').forEach((str) => {
    numMap.set(str, (numMap.get(str) || 0) + 1)
  })
  let size = 0
  ;[...numMap]
    .sort((a, b) => a[0] - b[0])
    .forEach((pair) => {
      const [key, value] = pair
      if (key === '1') {
        size += value
      } else {
        if (getSize(key) <= size) {
          size += value * Number(key)
        }
      }
    })

  for (let i = 0; i < 1000; i += 1 || 0) {
    if (size < getSize(i)) {
      return i - 1
    }
  }
}

fish('') === 1
fish('0') === 1
fish('6') === 1
fish('1111') === 2
fish('11112222') === 3
fish('111122223333') === 4
fish('111111111111') === 3
fish('111111111111111111112222222222') === 5
fish('151128241212192113722321331') === 5
fish(
  '18088786761876513400214721270802152631912662256399642814273585857557172491767032079562164141229107392305627718562942700210907490628971736866775970067616824061061294361070607675095235023067667552595161287292524413097082587185160663620101082921421962993670977671692185073649786784104425910950951782267498437979254344913274441337564888431862459797538926066443484528705434856',
)
