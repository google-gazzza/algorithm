// [JS][6kyu] Read the time
// read-the-time
// https://www.codewars.com/kata/5c2b4182ac111c05cf388858/train/javascript

const numberToWord = {
  0: 'midnight',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
}

const getMinuteString = (number) => {
  switch (true) {
    case number === 30:
      return 'half'
    case number === 15:
      return 'quarter'
    case number === 1:
      return 'one minute'
    case number > 30:
      return getMinuteString(60 - number)
    case number <= 20:
      return `${numberToWord[number]} minutes`
    default:
      return `twenty ${numberToWord[number % 10]} minutes`
  }
}

const solve = (time) => {
  const [hour, minute] = time.split(':').map((str) => parseInt(str, 10))
  const adjustHour = minute > 30 ? hour + 1 : hour
  const hourString = adjustHour === 24 || adjustHour === 0 ? 'midnight' : numberToWord[adjustHour > 12 ? adjustHour - 12 : adjustHour]
  if (minute === 0) {
    return `${hourString}${hourString !== 'midnight' ? " o'clock" : ''}`
  }
  const minuteString = getMinuteString(minute)

  return `${minuteString} ${minute > 30 ? 'to' : 'past'} ${hourString}`
}

solve('13:00') === "one o'clock"
solve('13:09') === 'nine minutes past one'
solve('13:15') === 'quarter past one'
solve('13:29') === 'twenty nine minutes past one'
solve('13:30') === 'half past one'
solve('13:31') === 'twenty nine minutes to two'
solve('13:45') === 'quarter to two'
solve('13:59') === 'one minute to two'
solve('00:48') === 'twelve minutes to one'
solve('00:08') === 'eight minutes past midnight'
solve('12:00') === "twelve o'clock"
solve('00:00') === 'midnight'
solve('19:01') === 'one minute past seven'
solve('07:01') === 'one minute past seven'
solve('01:59') === 'one minute to two'
solve('12:01') === 'one minute past twelve'
solve('00:01') === 'one minute past midnight'
solve('11:31') === 'twenty nine minutes to twelve'
solve('23:31') === 'twenty nine minutes to midnight'
solve('00:01') === 'one minute past midnight'
solve('11:45') === 'quarter to twelve'
solve('11:59') === 'one minute to twelve'
solve('23:45') === 'quarter to midnight'
solve('23:59') === 'one minute to midnight'
solve('01:45') === 'quarter to two'
solve('00:01') === 'one minute past midnight'
