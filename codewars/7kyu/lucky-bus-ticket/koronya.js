// [JS][7kyu] Lucky Bus Ticket
// lucky-bus-ticket
// https://www.codewars.com/kata/58902f676f4873338700011f/train/javascript

const getSum = (arr) => arr.reduce((acc, cur) => acc + Number(cur), 0)

const isLucky = (ticket) => {
  if (ticket.length !== 6) {
    return false
  }
  if (!/^\d+$/.test(ticket)) {
    return false
  }
  const ticketStr = ticket.split('')
  return getSum(ticketStr.slice(0, 3)) === getSum(ticketStr.slice(3))
}

isLucky('123321') === true
isLucky('100001') === true
isLucky('100200') === false
isLucky('12341234') === false
isLucky('12a12a') === false
isLucky('') === false
