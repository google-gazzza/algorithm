// [JS][7kyu] How many e-mails we sent today?
// how-many-e-mails-we-sent-today
// https://www.codewars.com/kata/58a369fa5b3daf464200006c/train/javascript

const getPercentage = (sent, limit = 1000) => {
  if (sent === 0) {
    return 'No e-mails sent'
  }
  if (sent >= limit) {
    return 'Daily limit is reached'
  }

  return `${Math.floor((sent / limit) * 100)}%`
}

// getPercentage(101, 1000) === '10%'
// getPercentage(256, 500) === '51%'
// getPercentage(256, 300) === '85%'
// getPercentage(259) === '25%'
// getPercentage(0) === 'No e-mails sent'
// getPercentage(1000, 1000) === 'Daily limit is reached'
