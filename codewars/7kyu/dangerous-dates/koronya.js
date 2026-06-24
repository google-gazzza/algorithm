// [JS][7kyu] Dangerous Dates
// dangerous-dates
// https://www.codewars.com/kata/53a257d83cacabb1fd0007d3/train/javascript

const nextFiveDays = (date) => {
  const arr = []
  while (arr.length < 5) {
    date = new Date(date.setDate(date.getDate() + 1))
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    arr.push(`${month}/${day}/${year}`)
  }

  return arr.join(', ')
}

const dd = new Date()
nextFiveDays(dd)
