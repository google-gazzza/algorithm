// [JS][6kyu] Count the days!
// count-the-days
// https://www.codewars.com/kata/5837fd7d44ff282acd000157/train/javascript

const ONE_DAY_MILLISECONDS = 86400000

const isSameDay = (d1, d2) => {
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()
}

const countDays = (d) => {
  const now = new Date()
  const nowTimestamp = now.getTime()
  const dTimestamp = d.getTime()
  const diffDay = Math.round((dTimestamp - nowTimestamp) / ONE_DAY_MILLISECONDS)
  if (diffDay < 0) {
    return 'The day is in the past!'
  }
  return isSameDay(d, now) ? `Today is the day!` : `${diffDay} days`
}

countDays(new Date('February 28, 2016')) === 'The day is in the past!'
countDays(new Date()) === 'Today is the day!'
