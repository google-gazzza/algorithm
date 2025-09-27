// [JS][7kyu] Easy Time Convert
// easy-time-convert
// https://www.codewars.com/kata/5a084a098ba9146690000969/train/javascript

function timeConvert(num) {
  if (num < 0) {
    return '00:00'
  }
  const hours = Math.floor(num / 60)
  const minutes = num % 60
  return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes
}

timeConvert(78)

timeConvert(0) === '00:00'
timeConvert(-6) === '00:00'
timeConvert(8) === '0' + 0 + ':' + '0' + 8
timeConvert(32) === '0' + 0 + ':' + 32
timeConvert(75) === '0' + 1 + ':' + 15
timeConvert(63) === '0' + 1 + ':' + '0' + 3
timeConvert(134) === '0' + 2 + ':' + 14
timeConvert(180) === '0' + 3 + ':' + '0' + 0
timeConvert(970) === 16 + ':' + 10
timeConvert(565757) === 9429 + ':' + 17
