// [JS][5kyu] RGB To Hex Conversion
// rgb-to-hex-conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

const convert = (num) => {
  if (num <= 0) return '00'
  if (num >= 255) return 'FF'
  return num.toString(16).toUpperCase().padStart(2, '0')
}

const rgb = (r, g, b) => {
  return [r, g, b].map(convert).join('')
}

// rgb(0, 0, 0) === '000000'
// rgb(0, 0, -20) === '000000'
// rgb(300, 255, 255) === 'FFFFFF'
// rgb(173, 255, 47) === 'ADFF2F'
