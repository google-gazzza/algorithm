// [JS][7kyu] Coloured Triangles
// coloured-triangles
// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript

const triangleSet = new Set(['R', 'G', 'B'])

const triangle = (row) => {
  let target = row
  while (target.length > 1) {
    let nextTarget = ''
    const targetLen = target.length
    for (let i = 0; i < targetLen - 1; i += 1) {
      const now = target[i]
      const next = target[i + 1]
      if (now === next) {
        nextTarget += now
      } else {
        const newSet = new Set(triangleSet)
        newSet.delete(now)
        newSet.delete(next)
        nextTarget += [...newSet][0]
      }
    }
    target = nextTarget
  }
  return target
}

triangle('GB') === 'R'
triangle('RRR') === 'R'
triangle('RGBG') === 'B'
triangle('RBRGBRB') === 'G'
triangle('RBRGBRBGGRRRBGBBBGG') === 'G'
triangle('B') === 'B'
