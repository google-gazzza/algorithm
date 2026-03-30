// [JS][7kyu] Correct the date-string
// correct-the-date-string
// https://www.codewars.com/kata/5787628de55533d8ce000b84/train/javascript

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

const getDaysInMonth = (month, year) => {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28
  }
  if ([4, 6, 9, 11].includes(month)) {
    return 30
  }
  return 31
}

const dateCorrect = (datestring) => {
  console.log('datestring: ', datestring)
  if (datestring === null || datestring === '') {
    return datestring
  }
  const dateParts = datestring.split('.')
  if (dateParts.length !== 3) {
    return null
  }
  const [day, month, year] = dateParts.map((part) => Number(part))
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return null
  }

  let restDay = day
  let targetMonth = month > 12 ? month % 12 : month
  let targetYear = month > 12 ? year + Math.floor(month / 12) : year
  while (restDay > getDaysInMonth(targetMonth, targetYear)) {
    restDay -= getDaysInMonth(targetMonth, targetYear)
    targetMonth += 1
    if (targetMonth > 12) {
      targetMonth = 1
      targetYear += 1
    }
  }

  return `${String(restDay).padStart(2, '0')}.${String(targetMonth).padStart(2, '0')}.${targetYear}`
}

// dateCorrect(null) === null
// dateCorrect('') === ''

// dateCorrect('01112016') === null
// dateCorrect('01,11,2016') === null
// dateCorrect('0a.1c.2016') === null

// dateCorrect('30.02.2016') === '01.03.2016'
// dateCorrect('40.06.2015') === '10.07.2015'
// dateCorrect('11.13.2014') === '11.01.2015'
// dateCorrect('99.11.2010') === '07.02.2011'
// dateCorrect('42.75.1782') === '11.04.1788'
