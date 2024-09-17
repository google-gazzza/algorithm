// [JS][6kyu] Parse HTML/CSS Colors
// parse-html-css-colors
// https://www.codewars.com/kata/58b57ae2724e3c63df000006/train/javascript

const convert = (str) => {
  return parseInt(str[0], 16) * 16 + parseInt(str[1], 16)
}

const parseHTMLColor = (color) => {
  const adjustColor = color[0] !== '#' ? PRESET_COLORS[color.toLowerCase()] : color
  if (adjustColor.length === 4) {
    const r = convert(adjustColor[1] + adjustColor[1])
    const g = convert(adjustColor[2] + adjustColor[2])
    const b = convert(adjustColor[3] + adjustColor[3])
    return { r, g, b }
  } else {
    const r = convert(adjustColor.slice(1, 3))
    const g = convert(adjustColor.slice(3, 5))
    const b = convert(adjustColor.slice(5, 7))
    return { r, g, b }
  }
}

// parseHTMLColor('#80FFA0')
// parseHTMLColor('#3B7')
// parseHTMLColor('LimeGreen')
// parseHTMLColor('#32cd32')
