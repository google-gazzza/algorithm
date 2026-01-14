// [JS][7kyu] Next birth-day of the week finder
// next-birth-day-of-the-week-finder
// https://www.codewars.com/kata/547336f44481cf5ecc000dde/train/javascript

const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

const nextBirthdayOfTheWeek = (birthday) => {
  const birthDate = birthday.getDate()
  const birthMonth = birthday.getMonth()
  const birthYear = birthday.getYear() + 1900
  // prettier-ignore
  const isStartThisYear = birthMonth > 1
    ? false
    : birthMonth === 1 && birthDate === 28 && isLeapYear(birthYear)
      ? false
      : true

  let count = 0
  let year = isStartThisYear ? birthYear : birthYear + 1
  while (true) {
    if (count % 7 === 0 && count > 0) {
      break
    }
    count += isLeapYear(year) ? 2 : 1
    year += 1
  }
  return year - birthYear - (isStartThisYear ? 0 : 1)
}

// nextBirthdayOfTheWeek(new Date(1990, 9, 16)) //11
// nextBirthdayOfTheWeek(new Date(2012, 5, 20)) //6
// nextBirthdayOfTheWeek(new Date(1975, 2, 22)) //5
