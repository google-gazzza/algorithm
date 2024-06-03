// [JS][6kyu] ASCII Fun #2: Funny Dots
// ascii-fun-2-funny-dots
// https://www.codewars.com/kata/59098c39d8d24d12b6000020/train/javascript

const dot = (col, row) => {
  const firstLine = `${'+---'.repeat(col)}+`
  const secondLine = `${'| o '.repeat(col)}|`
  const result = Array.from({ length: row }, () => firstLine + '\n' + secondLine + '\n').join('')
  return result + firstLine
}

// dot(1, 1) === '+---+\n| o |\n+---+'
// dot(3, 2) === '+---+---+---+\n| o | o | o |\n+---+---+---+\n| o | o | o |\n+---+---+---+'
