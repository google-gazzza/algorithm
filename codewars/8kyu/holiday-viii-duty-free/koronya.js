// [JS][8kyu] Holiday VIII - Duty Free
// holiday-viii-duty-free
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

const dutyFree = (normPrice, discount, hol) => Math.floor(hol / ((normPrice * discount) / 100))

dutyFree(12, 50, 1000)
dutyFree(17, 10, 500)
dutyFree(24, 35, 3000)
