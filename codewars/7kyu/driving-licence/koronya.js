// [JS][7kyu] Driving Licence
// driving-licence
// https://www.codewars.com/kata/586a1af1c66d18ad81000134/train/javascript

const MONTH_MAP = new Map([
  ['Jan', '01'],
  ['January', '01'],
  ['Feb', '02'],
  ['February', '02'],
  ['Mar', '03'],
  ['March', '03'],
  ['Apr', '04'],
  ['April', '04'],
  ['May', '05'],
  ['Jun', '06'],
  ['June', '06'],
  ['Jul', '07'],
  ['July', '07'],
  ['Aug', '08'],
  ['August', '08'],
  ['Sep', '09'],
  ['September', '09'],
  ['Oct', '10'],
  ['October', '10'],
  ['Nov', '11'],
  ['November', '11'],
  ['Dec', '12'],
  ['December', '12'],
])

const driver = (data) => {
  const [foreName, middleName = '', surName, dateOfBirth, gender] = data
  const [birthDate, birthMonth, birthYear] = dateOfBirth.split('-')
  const decadeDigit = birthYear[2]
  const monthNumber = MONTH_MAP.get(birthMonth)
  const monthDigit = gender === 'M' ? monthNumber : String(Number(monthNumber) + 50)
  const yaerLastDigit = birthYear[3]
  const twoInitial = (foreName[0] + (middleName ? middleName[0] : '')).padEnd(2, '9')
  const result = `${surName.substring(0, 5).toUpperCase().padEnd(5, '9')}${decadeDigit}${monthDigit}${birthDate}${yaerLastDigit}${twoInitial}9AA`
  return result
}

// data = ['John', 'James', 'Smith', '01-Jan-2000', 'M']
// driver(data) === 'SMITH001010JJ9AA'

// data = ['Johanna', '', 'Gibbs', '13-Dec-1981', 'F']
// driver(data) === 'GIBBS862131J99AA'

// data = ['Andrew', 'Robert', 'Lee', '02-September-1981', 'M']
// driver(data) === 'LEE99809021AR9AA'
