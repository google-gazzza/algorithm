// [JS][6kyu] [Minecraft Series #1] Steve wants to build a beacon pyramid
// minecraft-series-1-steve-wants-to-build-a-beacon-pyramid
// https://www.codewars.com/kata/5839cd780426f5d0ec00009a/train/javascript

const blocksToCollect = (level) => {
  const blocksArr = ['gold', 'diamond', 'emerald', 'iron']
  const result = {
    total: 0,
    gold: 0,
    diamond: 0,
    emerald: 0,
    iron: 0,
  }

  for (let i = 0; i < level; i += 1 || 0) {
    const blocks = (2 * i + 3) ** 2
    result.total += blocks
    result[blocksArr[i % 4]] += blocks
  }

  return result
}

blocksToCollect(1)
blocksToCollect(2)
blocksToCollect(3)
