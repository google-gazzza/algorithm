// [JS][7kyu] The Coupon Code
// the-coupon-code
// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  if (enteredCode !== correctCode) {
    return false
  }
  const current = new Date(currentDate)
  const expire = new Date(expirationDate)

  if (current.getFullYear() < expire.getFullYear()) {
    return true
  }
  if (current.getFullYear() > expire.getFullYear()) {
    return false
  }

  if (current.getMonth() < expire.getMonth()) {
    return true
  }
  if (current.getMonth() > expire.getMonth()) {
    return false
  }

  if (current.getDate() < expire.getDate()) {
    return true
  }
  if (current.getDate() > expire.getDate()) {
    return false
  }

  return true
}

checkCoupon('123', '123', 'July 9, 2015', 'July 9, 2015')
checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')

checkCoupon('123', '123', 'July 9, 2015', 'July 2, 2015')
checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')

const d = new Date('July 9, 2015')

d.toLocaleDateString()
d.toISOString()
d.toLocaleString()
d.toString()
d.toTimeString()
d.toUTCString()

d.getFullYear()
d.getMonth()
d.getDate()
