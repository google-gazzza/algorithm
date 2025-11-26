// [JS][7kyu] Correct the time-string
// correct-the-time-string
// https://www.codewars.com/kata/57873ab5e55533a2890000c7/train/javascript

const pad = (num) => num.toString().padStart(2, '0')

const timeCorrect = (timestring) => {
  if (!timestring) {
    return timestring
  }
  const splitArr = timestring.split(':')
  if (splitArr.length !== 3 || splitArr.some((part) => part.length !== 2 || isNaN(part))) {
    return null
  }

  let [hours, minutes, seconds] = splitArr.map(Number)
  if (seconds >= 60) {
    minutes += Math.floor(seconds / 60)
    seconds = seconds % 60
  }
  if (minutes >= 60) {
    hours += Math.floor(minutes / 60)
    minutes = minutes % 60
  }
  if (hours >= 24) {
    hours = hours % 24
  }

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

timeCorrect(null) === null
timeCorrect('') === ''

// Invalid Format
timeCorrect('001122') === null
timeCorrect('00;11;22') === null
timeCorrect('0a:1c:22') === null

// Correction Tests
timeCorrect('09:10:01') === '09:10:01'
timeCorrect('11:70:10') === '12:10:10'
timeCorrect('19:99:09') === '20:39:09'
timeCorrect('19:99:99') === '20:40:39'
timeCorrect('24:01:01') === '00:01:01'
timeCorrect('52:01:01') === '04:01:01'
