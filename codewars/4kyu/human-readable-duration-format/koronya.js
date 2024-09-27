// [JS][4kyu] Human readable duration format
// human-readable-duration-format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

const getQuotaAndRemainder = (num, divider) => {
  const quota = Math.floor(num / divider)
  const remainder = num % divider
  return [quota, remainder]
}

const MINUTES = 60
const HOURS = 60 * MINUTES
const DAYS = 24 * HOURS
const YEARS = 365 * DAYS
const ARR = [
  {
    name: 'year',
    divider: YEARS,
  },
  {
    name: 'day',
    divider: DAYS,
  },
  {
    name: 'hour',
    divider: HOURS,
  },
  {
    name: 'minute',
    divider: MINUTES,
  },
  {
    name: 'second',
    divider: 1,
  },
]

const getNumberString = (quota, name) => `${quota} ${name}${quota > 1 ? 's' : ''}`

const getAccString = (acc) => {
  if (acc === '') {
    return ''
  }
  if (acc === ', ') {
    return ''
  }
  return acc
}

const formatDuration = (seconds) => {
  if (seconds === 0) {
    return 'now'
  }
  const resultArr = []
  ARR.forEach((item, index) => {
    const { divider, name } = item
    const [quota, remainder] = getQuotaAndRemainder(seconds, divider)
    if (quota === 0) {
      return
    }
    resultArr.push(getNumberString(quota, name))
    seconds = remainder
  })
  const lastIndex = resultArr.length - 1
  return resultArr.reduce((acc, cur, index) => {
    if (lastIndex === 0) {
      return cur
    }
    if (index === lastIndex) {
      return `${acc} and ${cur}`
    }
    return index === 0 ? `${cur}` : `${acc}, ${cur}`
  }, '')
}

formatDuration(3)
formatDuration(62)
formatDuration(7561)

formatDuration(1) === '1 second'
formatDuration(62) === '1 minute and 2 seconds'
formatDuration(120) === '2 minutes'
formatDuration(3600) === '1 hour'
formatDuration(3662) === '1 hour, 1 minute and 2 seconds'
