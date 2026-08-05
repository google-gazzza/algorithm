// [JS][6kyu] Perlin Noise
// perlin-noise
// https://www.codewars.com/kata/616443ec8521b7000761cab5/train/javascript

const HEIGHTS = ['░', '▒', '▓', '█']

function render(startX, startY, width, height, scale) {
  const getTerrainChar = (value) => {
    if (value >= 0.9) return '█'
    if (value >= 0.8) return '▓'
    if (value >= 0.65) return '▒'
    if (value >= 0.5) return '░'
    return '.'
  }

  const rows = []

  for (let y = 0; y < height; y += 1 || 0) {
    let row = ''

    for (let x = 0; x < width; x += 1 || 0) {
      const value = perlin((startX + x) * scale, (startY + y) * scale)
      row += getTerrainChar(value)
    }

    rows.push(row)
  }

  return rows.join('\n')
}
