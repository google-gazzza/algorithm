// [JS][6kyu] Ticker
// ticker
// https://www.codewars.com/kata/5a959662373c2e761d000183/train/javascript

const ticker = (text, width, tick) => {
  const adjustTick = tick % (text.length + width)
  const adjustText = ' '.repeat(width) + text + ' '.repeat(width)
  return adjustText.substring(adjustTick, adjustTick + width)
}

// ticker('Beautiful is better than ugly.', 10, 5) === '     Beaut'
// ticker('Beautiful is better than ugly.', 10, 10) === 'Beautiful '
// ticker('Beautiful is better than ugly.', 10, 12) === 'autiful is'

// ticker('Beautiful is better than ugly.', 10, 0) === '          '
// ticker('Beautiful is better than ugly.', 10, 5) === '     Beaut'
// ticker('Beautiful is better than ugly.', 10, 30) === 'than ugly.'
// ticker('Beautiful is better than ugly.', 10, 31) === 'han ugly. '
// ticker('Beautiful is better than ugly.', 10, 39) === '.         '
//   ticker('Beautiful is better than ugly.', 10, 41) === '         B'
