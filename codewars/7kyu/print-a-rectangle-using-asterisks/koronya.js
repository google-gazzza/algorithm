// [JS][7kyu] Print a Rectangle Using Asterisks
// print-a-rectangle-using-asterisks
// https://www.codewars.com/kata/5937ae46377144bb2f000029/train/javascript

const getRectangleString = (width, height) => {
  const firstLine = '*'.repeat(width) + '\r\n'
  const middleLine = width > 2 ? '*' + ' '.repeat(width - 2) + '*\r\n' : '*\r\n'
  const middleSection = height > 2 ? middleLine.repeat(height - 2) : ''
  const lastLine = height > 1 ? '*'.repeat(width) + '\r\n' : ''
  return firstLine + middleSection + lastLine
}

// getRectangleString(1, 1)
// getRectangleString(1, 2)
// getRectangleString(3, 3)
// getRectangleString(5, 7)
// getRectangleString(2, 2)
