// [JS][4kyu] Strip Comments
// strip-comments
// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

const solution = (input, markers) =>
  input
    .split('\n')
    .map((line) => {
      markers.every((marker) => {
        const markerIndex = line.indexOf(marker)
        if (markerIndex > -1) {
          line = line.slice(0, markerIndex).trim()
          return false
        }
        return true
      })
      return line
    })
    .join('\n')

solution('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']) === 'apples, plums\npears\noranges'
solution('Q @b\nu\ne -e f g', ['@', '-']) === 'Q\nu\ne'
