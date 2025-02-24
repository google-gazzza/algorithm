// [JS][7kyu] Milk and Cookies for Santa
// milk-and-cookies-for-santa
// https://www.codewars.com/kata/52af7bf41f5a1291a6000025/train/javascript

const timeForMilkAndCookies = (date) => date.getMonth() === 11 && date.getDate() === 24

timeForMilkAndCookies(new Date(2013, 11, 24))
timeForMilkAndCookies(new Date(2013, 0, 23))
timeForMilkAndCookies(new Date(3000, 11, 24))
