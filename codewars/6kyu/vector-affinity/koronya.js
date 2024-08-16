// [JS][6kyu] Vector Affinity
// vector-affinity
// https://www.codewars.com/kata/5498505a43e0fd83620010a9/train/javascript

const vectorAffinity = (xs, ys) => {
  const xsLen = xs.length
  const ysLen = ys.length
  const n = Math.max(xsLen, ysLen)
  if (xsLen === 0 && ysLen === 0) {
    return 1
  }
  if ((xsLen === 0 && ysLen > 0) || (xsLen > 0 && ysLen === 0)) {
    return 0
  }

  return xs.reduce((acc, x, i) => acc + (x === ys[i] ? 1 : 0), 0) / n
}

vectorAffinity([1, 2, 3, 4, 5], [1, 2, 2, 4, 3]) === 3 / 5
vectorAffinity([1, 2, 3], [1, 2, 3]) === 1
vectorAffinity([1, 2, 3], [1, 2, 3, 4, 5]) === 3 / 5
vectorAffinity([1, 2, 3, 4], [1, 2, 3, 5]) === 3 / 4
vectorAffinity([6, 6, 6, 6, 6, 6], [6]) === 1 / 6
vectorAffinity([null], []) === 0
vectorAffinity([null], [null]) === 1
vectorAffinity([null], [null, null]) === 1 / 2
vectorAffinity([], []) === 1

vectorAffinity([], [19, 19, 1, 1, 5, 16, 11, 20, 14, 15, 4, 14, 0, 0, 20, 7, 7])
