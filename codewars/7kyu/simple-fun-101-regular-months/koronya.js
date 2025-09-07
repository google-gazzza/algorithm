// [JS][7kyu] Simple Fun #101: Regular Months
// simple-fun-101-regular-months
// https://www.codewars.com/kata/58981e716551af31b100063f/train/javascript

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

const regularMonths = (currMonth) => {
  let [startMonth, startYear] = currMonth.split('-').map(Number)

  let month = startMonth + 1
  let year = startYear
  if (month > 12) {
    month = 1
    year += 1
  }

  while (true) {
    const dow = new Date(year, month - 1, 1).getDay()
    if (dow === 1) {
      return `${String(month).padStart(2, '0')}-${year}`
    }
    month += 1
    if (month > 12) {
      month = 1
      year += 1
    }
  }
}

// regularMonths('02-2016') === '08-2016'
// regularMonths('05-2027') === '11-2027'
// regularMonths('09-2099') === '02-2100'
// regularMonths('01-1970') === '06-1970'
// regularMonths('07-2024') === '09-2025'
